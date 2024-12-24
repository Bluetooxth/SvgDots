import { Urbanist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

const urabanist = Urbanist({
  weights: [400, 500, 700],
  subsets: ["latin"],
});

export const metadata = {
  title: "SvgDots",
  description:
    "A collection of SVG patterns, Developed & maintained by Priyanshu Chahar.",
  keywords:
    "svg, svg patterns, svg shapes, svg dots, svg lines, svg waves, svg triangles, svg squares, svg circles, svg polygons, svg stars, svg hearts, svg spirals, svg curves, svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg, hero svg patterns, hero svg shapes, hero svg dots, hero svg lines, hero svg waves, hero svg triangles, hero svg squares, hero svg circles, hero svg polygons, hero svg stars, hero svg hearts, hero svg spirals, hero svg curves, hero svg,",
  image: "/preview.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urabanist.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
