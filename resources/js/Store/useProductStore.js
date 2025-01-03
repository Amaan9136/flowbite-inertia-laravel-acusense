import { create } from "zustand";

const useProductStore = create((set) => ({
  constProducts : [
    {
      name: "Hikvision DS-2CD2143G0-I",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.Gn_xCJ2p6fvzPBZI2LXdEgHaFj&pid=Api",
      price: 5999,
      specs: [
        "4 MP",
        "Infrared Night Vision",
        "Weatherproof",
        "Wide Dynamic Range",
      ],
    },
    {
      name: "Dahua IPC-HFW1431S",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.x7qenAWmOYZJwkxG2PJuCgHaGT&pid=Api",
      price: 6899,
      specs: [
        "4 MP",
        "30m IR Distance",
        "Smart Motion Detection",
        "H.265 Compression",
      ],
    },
    {
      name: "TP-Link Tapo C200",
      image:
        "https://tse2.mm.bing.net/th?id=OIP._SEGUu7a8p8NUUonk4G5DAHaFc&pid=Api",
      price: 2499,
      specs: ["Full HD", "Pan/Tilt", "Two-Way Audio", "Motion Detection"],
    },
    {
      name: "CP PLUS CP-UNC-T41L3",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.tNvLaVgZVXOMYu_po5tCrAHaE8&pid=Api",
      price: 7999,
      specs: ["4 MP", "30m IR Range", "PoE Support", "ONVIF Compatible"],
    },
    {
      name: "Zmodo Outdoor Wireless Camera",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Gn_xCJ2p6fvzPBZI2LXdEgHaFj&pid=Api",
      price: 4599,
      specs: [
        "720p HD",
        "Wi-Fi Connectivity",
        "Motion Alerts",
        "Weatherproof Design",
      ],
    },
    {
      name: "Reolink Argus 2",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.tNvLaVgZVXOMYu_po5tCrAHaE8&pid=Api",
      price: 8999,
      specs: [
        "1080p Full HD",
        "Solar Powered",
        "Two-Way Audio",
        "Starlight Night Vision",
      ],
    },
  ],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productName) =>
    set((state) => ({
      products: state.products.filter((product) => product.name !== productName),
    })),
}));

export default useProductStore;
