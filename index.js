import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;

// Necessary for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Training", href: "/training" },
  { name: "Careers", href: "/career" },
  { name: "Contact Us", href: "/contact" },
];

const bannerItems = [
  { img: "/banner/about.png" },
  { img: "/banner/career.png" },
  { img: "/banner/contract.png" },
  { img: "/banner/services.png" },
  { img: "/banner/solution.png" },
  { img: "/banner/training.png" },
];

// Route to render the homepage
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
      res.render("index", { navItems, images: bannerItems, data: jsonData });
    }
  );
});

// Route to render the about-us page
app.get("/about-us", (req, res) => {
  res.render("about-us", { navItems, images: bannerItems });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render("404");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
