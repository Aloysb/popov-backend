# Popov

A simple, lean and mobile CRM with Map view abilities.

Popov is born from a need from a family member to have access to lead/customers nearby.
He wanted a simple, clean interface that gives you access to basic information to nearby client without having to look around within you contact.

Popov never had the intention to replace a full CRM, nor has it been designed for public usage.

Popov is also a simple project to implement new technologies I was not familiar with, such as NestJS, Prisma and hone my development skills.

It is also a shopfront project for my portfolio, as well as living laboratory to try out new technologies.

## Technology Stack

The whole projet is using Typescript.

### Tooling

NestJS provide out of the box development server. I am not even sure the bundler behind it: rollup?
The front end is bundled with ViteJS.

API testing has been conducted with Postman and you can find the documentation as well as the collection [here].

### Backend

Popov is built using NestJS, Prisma, Postgres on the backend.

The backend is built using a simple REST API structure - Graph QL has been envisaged (hence the use of Primsa), but didn't really add any value to the current project.

### Frontend

JS: TBA - probably a light framework (Svelte, Vue or even simply Alpine)
CSS: Tailwind

### Design

A rough wireframe of the project has been realised on XD and is available here.

### Developer Roadmap

Legend:

- [ ] Planned
- [-] In progress
- [x] Done

#### Design

- [-] Wireframe
- [ ] Lo-fi design
- [ ] Hi-fi design
- [ ] Prototype
- [ ] Publication
- [ ] Written report on decision taken

#### Tooling

- [ ] Add CICD pipeline
- [ ] Add PWA abilites
- [ ] Add linter, autoformater
- [ ] Complete Postman collection
- [ ] Complete Postman collection

#### Backend

- [-] Provide CRUD endpoints for Leads, address and Company.
- [ ] Add custom errors with decent information on error status.
- [ ] Add unit tests for each endpoint.
- [ ] Report on technologies used
- [ ] Change 'address' to 'address'

#### Frontend

- [ ] Decide on stack
