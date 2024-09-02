import MainPage from "../Pages/main/MainPage";
import RootLayout from "../Pages/RootLayout";

export const main_route = [
  {
    element: <RootLayout />,
    path: "main",
    children: [{ index: true, element: <MainPage /> }],
  },
];
