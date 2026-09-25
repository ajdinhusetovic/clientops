import { Show, SignInButton, SignUpButton } from "@clerk/react";

import { DashboardPage } from "./pages/DashboardPage";
import "./App.css";

function App() {
  return (
    <main>
      <h1>ClientOps</h1>

      <Show when="signed-out">
        <section>
          <p>Manage your clients, projects and tasks.</p>

          <div>
            <SignInButton />
            <SignUpButton />
          </div>
        </section>
      </Show>

      <Show when="signed-in">
        <DashboardPage />
      </Show>
    </main>
  );
}

export default App;
