import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner__footer}>
        <div className={classes.fttr}>
          <p>
            <i class="far fa-copyright"></i> Copyright 2019-2025,Ninhydrin
            Project | Made By
            <a href="https://www.linkedin.com/in/ankit-bisen-13a55a1a7">
              Ankit Bisen <i class="fas fa-external-link-alt"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
