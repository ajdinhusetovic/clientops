import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

import "./App.css";

function App() {
  return (
    <main>
      <h1>ClientOps</h1>

      <Show when="signed-out">
        <p>Manage your clients, projects and tasks.</p>

        <div>
          <SignInButton />
          <SignUpButton />
        </div>
      </Show>

      <Show when="signed-in">
        <header>
          <h2>Dashboard</h2>
          <UserButton />
        </header>

        <p>You are signed in.</p>
      </Show>
    </main>
  );
}

export default App;
