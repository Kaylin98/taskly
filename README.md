# Taskly

Taskly is an Angular task manager where tasks are scoped per user. Pick a user from the list, see only their tasks, add new ones, and mark tasks done — everything is persisted to `localStorage`.

## Live Demo

🔗 [https://kaylin98.github.io/taskly/](https://kaylin98.github.io/taskly/)

![Taskly screenshot](<img width="916" height="863" alt="Screenshot 2026-07-15 155701" src="https://github.com/user-attachments/assets/39076636-b0de-417e-92bc-f56b4fb0b811" />
)

## How it's built

**App shell ([app.ts](src/app/app.ts))** holds the list of users (currently [DUMMY_USERS](src/app/dummy-users.ts), no backend) and tracks `selectedUserId` as component state. Selecting a user re-renders the [Tasks](src/app/tasks/tasks.ts) component scoped to that user's id.

**User selection ([user-card.ts](src/app/user/user-card.ts))** — each user renders as an `app-user-card`, wrapped in the shared [Card](src/app/shared/card/card.ts) presentational component. Clicking a card emits the user's id via `select`, which the app shell listens to via `onUserSelected`.

**Tasks ([tasks.ts](src/app/tasks/tasks.ts))** — receives `userId` and `name` as required `@Input`s. Task data is pulled reactively via `tasksService.getUserTasks(userId)`, so the list stays in sync with whatever the service holds. Also owns the `isAddingTask` toggle that shows/hides the new-task form.

**Adding a task ([new-task.ts](src/app/tasks/new-task/new-task.ts))** — a template-driven form (`FormsModule` + `ngModel`) collecting title, summary, and due date. On submit it calls `tasksService.addTask()` and emits `close` to collapse the form.

**Completing a task ([task-card.ts](src/app/tasks/task-card/task-card.ts))** — "complete" doesn't set a flag, it calls `tasksService.removeTask(task.id)`, so completed tasks are deleted outright rather than marked done.

**Persistence ([tasks.service.ts](src/app/tasks/tasks.service.ts))** — a singleton service seeded with hardcoded dummy tasks. On construction it checks `localStorage.getItem('tasks')` and, if present, replaces the seed data with what's stored. Every add/remove writes the full task array back to `localStorage` under the `tasks` key — there's no backend, so this is the only source of persistence.

### Data models ([task.model.ts](src/app/tasks/task.model.ts), [user.model.ts](src/app/user/user.model.ts))

```ts
interface Task { id: string; userId: string; title: string; summary: string; dueDate: string; }
interface NewTaskData { title: string; summary: string; dueDate: string; }
interface User { id: string; name: string; avatar: string; }
```

## Tech stack

- Angular 22 — standalone components throughout, no NgModules
- TypeScript, template-driven forms (`FormsModule`)
- [Vitest](https://vitest.dev/) for unit tests

## Getting started

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`.

### Running tests

```bash
npm test
```

### Building for production

```bash
npm run build
```

Build artifacts are output to `dist/`.

## Known gaps

- `app.routes.ts` is empty — there's no routing yet, everything lives on one screen.
- Tasks are user-scoped by `userId` string matching only; there's no auth, so any user can be selected and edited by anyone using the app.
- "Completing" a task deletes it rather than tracking completion state.
