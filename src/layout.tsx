import '@/styles/globals.css'
import { RocaOne } from './fonts'

export const metadata = {
  title: 'AiCook - Smart Recipes',
  description: 'Transform Ingredients into Culinary Masterpieces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={RocaOne.className}>{children}</body>
    </html>
  )
}

