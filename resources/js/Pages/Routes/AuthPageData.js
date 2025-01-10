import { RiBarChart2Line, RiBarChartLine, RiBillFill, RiBillLine, RiExchangeBoxLine, RiExchangeLine, RiFileList3Line, RiFileTextLine, RiNotification3Line, RiProductHuntLine, RiSettings2Line, RiShoppingCartLine, RiStackLine, RiUserLine } from 'react-icons/ri';

const NeedAuthPageData = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: RiBarChart2Line
  },
  {
    name: "Purchase",
    path: "/purchase",
    icon: RiShoppingCartLine
  },
  {
    name: "Purchase Invoice",
    path: "/purchase-invoice",
    icon: RiBillLine
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: RiBarChartLine
  },
  {
    name: "Profile", 
    path: "/profile",
    icon: RiUserLine
  },
  {
    name: "Product",
    path: "/product",
    icon: RiProductHuntLine
  },
  {
    name: "Transfer",
    path: "/transfer",
    icon: RiExchangeLine
  },
  {
    name: "Link Invoice",
    path: "/link-invoice",
    icon: RiBillFill
  },
  {
    name: "Take Stock",
    path: "/take-stock",
    icon: RiStackLine
  },
  {
    name: "Credit Note",
    path: "/credit-note",
    icon: RiFileTextLine
  },
  {
    name: "RMA",
    path: "/rma",
    icon: RiExchangeBoxLine
  },
  {
    name: "Parameters",
    path: "/parameters",
    icon: RiSettings2Line
  },
  {
    name: "Reports",
    path: "/reports",
    icon: RiFileList3Line
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: RiNotification3Line
  }
];

export default NeedAuthPageData;
