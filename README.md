# Core
- [/apps](#apps)
- [/modules](#modules)
- [/packages](#packages)

# Apps

# Modules

# Packages

## Extracting Libraries and Utilities into `packages/*` Directory

## Introduction

In our TypeScript NodeJS monorepo, utilizing Turborepo, we have adopted a structured approach to managing our codebase by extracting libraries (`libs`) and utilities (`utils`) into the `packages/*` directory. This README explains the rationale behind this architecture, focusing on the benefits it brings in terms of build optimization, separation of concerns, reusability, and overall codebase maintainability.

## Why Extract `libs` and `utils`?

### 1. Build Optimization

#### Pre-transpiled TypeScript Directories:
NodeJS, by default, does not understand TypeScript. Typically, TypeScript files need to be transpiled into JavaScript before they can be executed by NodeJS. By extracting our libraries and utilities into separate packages and pre-transpiling them, we optimize our build process in several ways:

- **Faster Build Times:** Pre-transpiling these directories means that during the build process, the TypeScript compilation step can be skipped for these packages. This significantly reduces build times, especially in large-scale projects.
- **Caching Benefits:** Turborepo leverages robust caching mechanisms. By isolating libraries and utilities, we can cache their build artifacts independently, ensuring that unchanged code does not need to be rebuilt, further speeding up the build process.
- **Parallelization:** Turborepo allows for parallel execution of tasks. By structuring our code into separate packages, we can build or transpile multiple packages in parallel, utilizing system resources more efficiently.

### 2. Separation of Concerns

By extracting `libs` and `utils` into separate packages, we adhere to the principle of separation of concerns:

- **Clear Boundaries:** Each library or utility serves a distinct purpose. Keeping them in separate packages enforces clear boundaries and reduces the complexity within each package.
- **Focused Development:** Developers can focus on specific aspects of the overall application without being overwhelmed by the entire codebase. This leads to better code quality and easier maintenance.

### 3. Reusability Across Applications

One of the key advantages of this approach is the enhanced reusability:

- **Shared Codebase:** Common functionalities that are used across different parts of the application, or even across different projects, can be shared easily without duplication.
- **Independent Versioning:** Each package can be versioned independently. This allows for more controlled and safe updates, as changes in one library do not necessarily affect others unless explicitly updated.

### 4. Improved Code Management and Collaboration

- **Easier Code Reviews:** Smaller, well-defined packages are easier to understand and review.
- **Collaboration-Friendly:** Different teams can work on different packages without causing conflicts, making it easier to manage a large team and codebase.

### 5. Scalability and Flexibility

- **Scalable Structure:** As the project grows, new libraries and utilities can be added seamlessly without impacting the existing structure.
- **Flexibility in Tech Choices:** Different packages can potentially use different technologies or versions, providing flexibility in tech choices and upgrades.

## Conclusion

The extraction of libraries and utilities into the `packages/*` directory in our TypeScript NodeJS monorepo is a strategic decision that brings numerous benefits. It optimizes the build process, enforces separation of concerns, enhances reusability, facilitates better code management, and supports scalability. This structure, empowered by Turborepo, sets a strong foundation for a maintainable, efficient, and collaborative development environment.