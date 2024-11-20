const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.locals.formattedDate = moment()
    .format("dddd. MMMM DD. YYYY")
    .toUpperCase();
  next();
});

const { navItems, bannerItems } = require("./data/data");

app.get("/", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "data.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading data");
        return;
      }
      const jsonData = JSON.parse(data);

      fs.readFile(
        path.join(__dirname, "data", "content.json"),
        "utf-8",
        (err, contentData) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error reading content data");
            return;
          }
          const contentJson = JSON.parse(contentData);
          res.render("index", {
            navItems,
            images: bannerItems,
            data: jsonData,
            content: contentJson,
            formattedDate: res.locals.formattedDate,
          });
        }
      );
    }
  );
});

app.get("/about-us", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "aboutContent.json"),
    "utf-8",
    (err, aboutContentData) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading about content data");
        return;
      }
      const aboutContent = JSON.parse(aboutContentData);
      res.render("about-us", {
        navItems,
        aboutContent,
        formattedDate: res.locals.formattedDate,
      });
    }
  );
});

app.get("/services", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "servicesContent.json"),
    "utf-8",
    (err, servicesContentData) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading services content data");
        return;
      }
      const servicesContent = JSON.parse(servicesContentData);
      res.render("services", {
        navItems,
        servicesContent,
        formattedDate: res.locals.formattedDate,
      });
    }
  );
});

app.get("/solutions", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "solutionsContent.json"),
    "utf-8",
    (err, solutionsContentData) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading solutions content data");
        return;
      }
      const solutionsContent = JSON.parse(solutionsContentData);
      res.render("solutions", {
        navItems,
        solutionsContent,
        formattedDate: res.locals.formattedDate,
      });
    }
  );
});

app.get("/training", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "trainingContent.json"),
    "utf-8",
    (err, trainingContentData) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading training content data");
        return;
      }
      const trainingContent = JSON.parse(trainingContentData);
      res.render("training", {
        navItems,
        trainingContent,
        formattedDate: res.locals.formattedDate,
      });
    }
  );
});
app.get("/career", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "careerContent.json"),
    "utf-8",
    (err, careerContentData) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading training content data");
        return;
      }
      const careerContent = JSON.parse(careerContentData);
      res.render("career", {
        navItems,
        careerContent,
        formattedDate: res.locals.formattedDate,
      });
    }
  );
});
app.get("/contact", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "contactContent.json"),
    "utf-8",
    (err, contactContentData) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading training content data");
        return;
      }
      const contactContent = JSON.parse(contactContentData);
      res.render("contact", {
        navItems,
        contactContent,
        formattedDate: res.locals.formattedDate,
      });
    }
  );
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
