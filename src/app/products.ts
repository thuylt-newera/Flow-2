import imgP1 from "@/imports/SheetThemSảnPhẩm/5f228b8b00748e7b1a7cb6d644aa233fa08c7ec5.png";
import imgP2 from "@/imports/SheetThemSảnPhẩm/7a13ca0d9aa440c5d4c0b2e37600f2caedbb9346.png";
import imgP3 from "@/imports/SheetThemSảnPhẩm/dfa9f09713fbf37867ae7ab7de0d4cc07bbdb30b.png";
import imgP4 from "@/imports/SheetThemSảnPhẩm/fc94ed2ce9494293ab6884757714212d17bf5887.png";
import imgP5 from "@/imports/SheetThemSảnPhẩm/144829a070f1fbb4389b028a670c6dff59a60e97.png";
import imgP6 from "@/imports/SheetThemSảnPhẩm/979ba2e41856555b8dc97bf7379fd75a21eb90d5.png";

export interface Product {
  name: string;
  price: number;
  img: string;
}

export const PRODUCTS: Product[] = [
  { name: "Mì Kokomi tôm chua cay",                              price: 9000,   img: imgP1 },
  { name: "Nước mắm Chin-Su ủ chượp 365 - 40N thủy tinh 700ml", price: 75000,  img: imgP2 },
  { name: "Tương ớt Chinsu chai 250g",                           price: 18000,  img: imgP3 },
  { name: "Mì Kokomi Pro canh chua nam bộ",                      price: 5000,   img: imgP4 },
  { name: "Kokomi pro canh chua Nam Bộ 82g",                     price: 138000, img: imgP5 },
  { name: "Mì tô khoai tây Omachi lẩu tôm càng",                price: 248000, img: imgP6 },
];

export function formatPrice(n: number) {
  return n.toLocaleString("vi-VN").replace(/\./g, ".");
}
