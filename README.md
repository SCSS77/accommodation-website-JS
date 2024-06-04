# Web Hosting Project

This project is a web hosting site structured with Pattern Lab using Atomic Design. Several key elements have been defined for the site, including a preheader, header, title, hero banner, and a "Why Choose Us" section.

## Project Structure

The project follows the Atomic Design methodology and is structured into the following levels:

- `00-atoms`: Basic, indivisible components.
- `01-molecules`: Simple combinations of atoms.
- `02-organisms`: Complete sections that combine molecules and atoms.
- `03-templates`: Complete templates using organisms and molecules.
- `04-pages`: Complete pages using templates.

## Defined Elements

### Preheader

Contains some utility links.

### Header

Includes navigation and the language selector.

### Title

Displays a city selector.

### Hero Banner

Includes a destination search and an element to book a room by the number of adults and children.

### "Why Choose Us" Section

Highlights some key points of the site.

## Technologies Used

- **Pattern Lab**
- **Atomic Design**
- **Tailwind CSS**
- **PostCSS**

## Requirements

- Node.js (LTS version recommended)
- npm or yarn

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-name>
2. Install the dependencies:
   `npm install` o `yarn install`
3. Start the Pattern Lab server:
`npm run start` o `yarn start`

## Deployment
`npm run build` o `yarn build`

## Contributing
Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [MIT License](LICENSE).
