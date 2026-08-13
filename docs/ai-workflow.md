# How this repo was built (AI-assisted workflow)

This portfolio was built with **Claude Code** as a pair-programmer, using a deliberate, auditable workflow —
the same one used for [`text-to-sql-rag`](https://github.com/Rad710/text-to-sql-rag). The point of this
page: the AI didn't "generate the site" in one shot — it was driven through small, reviewed steps, and the
paper trail is committed so you can see exactly how.

## The workflow

- **Everything is a task.** Work is broken into numbered, self-contained task folders under
  [`tasks/`](tasks/) — each with a spec (`README.md`: Goal · Context · Plan · Done when) and an append-only
  `discussion.md` log. The backlog and build order live in [`tasks/README.md`](tasks/README.md).
- **One task in progress at a time.** No "while I'm here" changes; a task is done only when every "Done
  when" box passes.
- **One commit per task.** Each finished task is a single focused commit — never one giant "did everything"
  commit. The history is meant to be read. The repo owner runs every commit.
- **Decisions are recorded and immutable.** Design choices (stack, i18n approach, deploy) are written down
  as numbered records in [`decisions/`](decisions/README.md) with the alternatives considered. A reversed
  decision is *superseded* by a new record, never edited away.

## Why it's public

The `docs/` tree is committed on purpose. For a reviewer, it's the honest answer to "how do you use AI?":
disciplined, decision-logged, and reviewable — the opposite of an opaque one-prompt dump. The process is
part of the portfolio, not scaffolding to hide.
