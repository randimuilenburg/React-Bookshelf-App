function CaseStudyPage() {
  return (
    <div>
      <h2 className="info-h">Learn more about this project!</h2>
      <p className="info-p">
        This is a React application designed to showcase a collection of authors
        and their works. Built with ReactJS, the app presents an interactive
        grid of books with a filtering system that allows users to browse by
        author. It’s a project that blends clean design with structured data,
        making it both a visually engaging and technically sound example of my
        development skills.
      </p>
      <p className="info-p">
        The application currently uses structured arrays to manage content such
        as author bios, book details, cover images, and external purchase links.
        These data sets are mapped into reusable components that dynamically
        generate dropdown menus, book grids, and branches off into individual
        author bio pages. This approach not only demonstrates my ability to
        design scalable front-end architecture, but also prepares the app for
        future integration with a backend database like MongoDB.
      </p>
      <p className="info-p">
        The next phase will involve migrating the data to that MongoDB backend,
        allowing for scalability, easier updates, and the ability to store a
        larger library of authors and books. Long term, my plan is to evolve
        this project to showcase my ability and experience with front-end,
        back-end, design, and APIs.
      </p>
    </div>
  );
}
export default CaseStudyPage;
