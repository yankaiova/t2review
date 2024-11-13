import { createBrowserRouter } from "react-router-dom";
import { Layout } from "..";
import { CalendarPage } from "@/pages/calendar";
import { HomePage } from "@/pages/main";
import { PrivateRoute } from "./private";
import { CreatePage } from "@/pages/create-meeting";
import { SearchPage } from "@/pages/search";
import { SearchExpertPage } from "@/pages/search-by-expert";
import { MeetingDetail } from "@/pages/meeting-detail/ui";

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
      {
        path: "/calendar",
        element: (
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/meeting/:meetingId",
        element: (
          <PrivateRoute>
            <MeetingDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/meeting/:meetingId/reschudale/expert/:expertId",
        element: (
          <PrivateRoute>
            <SearchExpertPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/search",
        element: (
          <PrivateRoute>
            {" "}
            <SearchPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/search/expert/:expertId",
        element: (
          <PrivateRoute>
            <SearchExpertPage />
          </PrivateRoute>
        ),
      },

      {
        path: "/meetings/create",
        element: (
          <PrivateRoute>
            <CreatePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
