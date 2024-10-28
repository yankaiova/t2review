import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/layout/ui";
import { CalendarPage } from "../../pages/calendar";
import { MeetingEditPage } from "../../pages/meeting-edit";
import { SearchPage } from "../../pages/search";
import { HomePage } from "../../pages/main";
import { PrivateRoute } from "./private";
import { CreatePage } from "../../pages/create-meeting";
import { SearchExpertPage } from "../../pages/search-by-expert";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops...</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      // {
      //   path: "/search",
      //   element: (
      //     <PrivateRoute>
      //       <SearchPage />
      //     </PrivateRoute>
      //   ),
      //   children: [
      //     {
      //       path: "/expert/:id",
      //       element: (
      //         <PrivateRoute>
      //           <SearchExpertPage />
      //         </PrivateRoute>
      //       ),
      //     },
      //   ],
      // },
      // {
      //   path: "/meeting/create",
      //   element: (
      //     <PrivateRoute>
      //       <CreatePage />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/calendar",
        element: (
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/meeting/:id/edit",
      //   element: (
      //     <PrivateRoute>
      //       <MeetingEditPage />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/meeting/:id/reschudale",
      //   element: (
      //     <PrivateRoute>
      //       <SearchExpertPage />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
