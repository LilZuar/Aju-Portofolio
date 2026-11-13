import { ref } from 'vue'
import data, { profile } from '@/data/data'
import type { WorkItem } from '@/types'

interface LoadedImage {
  data: string
  width: number
  height: number
}

// A4 portrait, millimetres
const PAGE_W = 210
const PAGE_H = 297
const MARGIN = 18
const CONTENT_W = PAGE_W - MARGIN * 2
const FOOTER_SPACE = 14

const INDIGO: [number, number, number] = [79, 70, 229]
const SLATE_900: [number, number, number] = [15, 23, 42]
const SLATE_600: [number, number, number] = [71, 85, 105]
const SLATE_400: [number, number, number] = [148, 163, 184]
const SLATE_100: [number, number, number] = [241, 245, 249]

// Standard PDF fonts only cover basic Latin, so normalise typographic characters.
const clean = (text: string) =>
  text
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()

// Load an image from /public, downscale it and re-encode as JPEG so the PDF stays small.
function loadImage(src: string, maxSide = 1400): Promise<LoadedImage | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight))
      const width = Math.round(img.naturalWidth * scale)
      const height = Math.round(img.naturalHeight * scale)
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if (!ctx) return resolve(null)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)
      ctx.drawImage(img, 0, 0, width, height)
      resolve({ data: canvas.toDataURL('image/jpeg', 0.85), width, height })
    }
    img.onerror = () => resolve(null)
    img.src = src
  })
}

export function usePortfolioPdf() {
  const generating = ref(false)

  async function downloadPortfolio() {
    if (generating.value) return
    generating.value = true
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
      const works: WorkItem[] = data.workItems

      // ---------- Cover page ----------
      doc.setFillColor(...INDIGO)
      doc.rect(0, 0, PAGE_W, 70, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(11)
      doc.text('PORTFOLIO', MARGIN, 28)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(28)
      doc.text(profile.name, MARGIN, 42)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(13)
      doc.text(profile.role, MARGIN, 52)

      let y = 88
      doc.setTextColor(...SLATE_900)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text('About Me', MARGIN, y)
      y += 7
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10.5)
      doc.setTextColor(...SLATE_600)
      const summary = doc.splitTextToSize(clean(profile.summary), CONTENT_W)
      doc.text(summary, MARGIN, y, { lineHeightFactor: 1.5 })
      y += summary.length * 5.6 + 10

      doc.setTextColor(...SLATE_900)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text(`Selected Projects (${works.length})`, MARGIN, y)
      y += 9

      works.forEach((work, i) => {
        doc.setFillColor(...SLATE_100)
        doc.roundedRect(MARGIN, y - 5.5, CONTENT_W, 13, 2, 2, 'F')
        doc.setTextColor(...INDIGO)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(11)
        doc.text(String(i + 1).padStart(2, '0'), MARGIN + 4, y + 2.5)
        doc.setTextColor(...SLATE_900)
        doc.text(clean(work.title), MARGIN + 14, y)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9)
        doc.setTextColor(...SLATE_600)
        const sub = doc.splitTextToSize(clean(work.subtitle), CONTENT_W - 18)[0]
        doc.text(sub, MARGIN + 14, y + 4.8)
        y += 16
      })

      // ---------- Project pages ----------
      for (const [i, work] of works.entries()) {
        doc.addPage()
        y = MARGIN

        const ensureSpace = (needed: number) => {
          if (y + needed > PAGE_H - FOOTER_SPACE - MARGIN / 2) {
            doc.addPage()
            y = MARGIN
          }
        }

        const [banner, ...previews] = await Promise.all([
          loadImage('/images/' + work.glide, 2000),
          ...(work.previews ?? []).map((p) => loadImage('/images/' + p, 900)),
        ])

        if (banner) {
          const h = (CONTENT_W * banner.height) / banner.width
          doc.addImage(banner.data, 'JPEG', MARGIN, y, CONTENT_W, h, undefined, 'FAST')
          y += h + 10
        }

        doc.setTextColor(...INDIGO)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.text(`PROJECT ${String(i + 1).padStart(2, '0')}`, MARGIN, y)
        y += 9
        doc.setTextColor(...SLATE_900)
        doc.setFontSize(24)
        doc.text(clean(work.title), MARGIN, y)
        y += 8
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(12)
        doc.setTextColor(...SLATE_600)
        const subtitle = doc.splitTextToSize(clean(work.subtitle), CONTENT_W)
        doc.text(subtitle, MARGIN, y)
        y += subtitle.length * 5.5 + 6

        const section = (heading: string, body: string) => {
          ensureSpace(16)
          doc.setDrawColor(...SLATE_100)
          doc.line(MARGIN, y, MARGIN + CONTENT_W, y)
          y += 8
          doc.setTextColor(...SLATE_900)
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(13)
          doc.text(heading, MARGIN, y)
          y += 7
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(10.5)
          doc.setTextColor(...SLATE_600)
          const lines: string[] = doc.splitTextToSize(clean(body), CONTENT_W)
          const lineH = 5.4
          for (const line of lines) {
            ensureSpace(lineH)
            doc.text(line, MARGIN, y)
            y += lineH
          }
          y += 6
        }

        section('Overview', work.description)
        section('My Role', work.jobDesc)

        const shots = previews.filter((p): p is LoadedImage => p !== null)
        if (shots.length) {
          const gap = 5
          const cols = Math.min(shots.length, 4)
          const cellW = (CONTENT_W - gap * (cols - 1)) / cols
          const tallest = Math.max(...shots.map((s) => (cellW * s.height) / s.width))
          // Shrink screenshots to fit the rest of the page when there's reasonable room left.
          const available = PAGE_H - FOOTER_SPACE - MARGIN / 2 - y - 8
          const cellH = Math.min(tallest, 110, available >= 60 ? available : 110)
          ensureSpace(cellH + 8)
          doc.setTextColor(...SLATE_900)
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(13)
          doc.text('Screenshots', MARGIN, y)
          y += 6
          shots.slice(0, cols).forEach((shot, idx) => {
            const ratio = shot.width / shot.height
            let h = cellH
            let w = h * ratio
            if (w > cellW) {
              w = cellW
              h = w / ratio
            }
            const x = MARGIN + idx * (cellW + gap) + (cellW - w) / 2
            doc.addImage(shot.data, 'JPEG', x, y, w, h, undefined, 'FAST')
          })
          y += cellH + 6
        }
      }

      // ---------- Footer on every page ----------
      const total = doc.getNumberOfPages()
      for (let p = 1; p <= total; p++) {
        doc.setPage(p)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8.5)
        doc.setTextColor(...SLATE_400)
        doc.text(`${profile.name} - Portfolio`, MARGIN, PAGE_H - 10)
        doc.text(`${p} / ${total}`, PAGE_W - MARGIN, PAGE_H - 10, { align: 'right' })
      }

      doc.save(`${profile.name.replace(/\s+/g, '_')}_Portfolio.pdf`)
    } catch (err) {
      console.error('Failed to generate portfolio PDF:', err)
      alert('Sorry, the portfolio PDF could not be generated. Please try again.')
    } finally {
      generating.value = false
    }
  }

  return { generating, downloadPortfolio }
}
