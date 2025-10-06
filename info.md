# Main Beis Midrash

A part of Ohr Somayach Yeshiva in Yerushalayim

For the serious student who can study Gemara with Rashi and Tosfos and seeks to become fully independent in their learning. Through three daily sedorim in a warm and inclusive environment, the program trains students to become deep, advanced and developed Gemara learners, to achieve broad knowledge across Masechtos, develop understanding in hashkafa and mussar, and fosters personal growth, with multiple Rabbeim available to guide each student individually in every area.

## Who is it for?

The student who is already capable of preparing Gemara, Rashi and Tosfos and who seeks to become fully independent in learning.

## What does it offer?

- The exciting atmosphere of a classical Beis Medrash with a large body of highly motivated students.
- A high teacher-student ratio, and a staff composed of some of the foremost scholars in Jewish learning, ensures that each student receives maximum opportunity for development. The Rabbeim are also highly accessible to their students for educational and personal guidance.
- A rich variety of advanced Gemara, Halacha and Hashkafa shiurim.
- The student learns to independently prepare a folio of Talmud and to engage in creative research, coming to appreciate, first hand, the intense experience of unraveling a complex Talmudic problem
- Philosophy, ethics and history are studied from their sources.
- Shabbatonim with the Rebbeim

## Where will you be (after 1-2 years)?

Able to independently prepare Gemara, Rashi, Tosfos, and to master the meforshim – skills which will serve you well at every stage of your life.

Learning at a level equal to the advanced levels of mainstream yeshivos.

Qualified to enter a mainstream yeshiva at an advanced level.

---

Our goal is to stand our talmidim on their feet in learning and in Yiddishkeit in general. This means enabling them to either mainstream into high level yeshivas, or prepare them to be _bnei Torah_ in the working world.

## Iyun

We learn thoroughly in order to give training in how to learn a sugiya, not only by seeing what the maggid shiur pulls out of the text, but by going through the process with him. The shiurim are text-based, teaching thorough and systematic analysis, and there is a great deal of give-and-take between the Rebbe and talmidim in shiur and in the Beis Medrash, so that the talmidim pick up the method and thought process – the מהלך-which is being imparted. The process starts with the Gemara and progresses to Rashi and Tosfos.

The more advanced shiurim continue to "inside" analysis of Rishonim and then Acharonim– explaining, making inferences and contrasting one Rishon / Acharon with another.

If you want to learn carpentry, it is not enough to watch even a master carpenter at work; you need to have someone take your hands and show you how to use the tools.

## Bekius

We make an annual siyum on the masechta being learned b'iyun.

## Hashkafa

There are regular Vaadim to open up inyanim of hashkafa and mussar and give guidance. But this cannot replace teaching and guiding the individual according to his level and needs. In addition to the Rebbeim, including two mashgichim, being readily available for consultation, most talmidim have weekly one-on-one sessions with one of the Rebbeim. Thus strong Rebbi-talmid relationships are built and the most effective guidance is given. Where necessary, basic issues of emunah are approached; any question can be asked.

---

Online application URL: https://ohr.edu/forms/start.php?progid=7

---

## The Rabbeim

### Rabbi Uriel Goodwin

Mashgiach and Maggid Shiur

profile photo: images/rabbi-uriel-goodwin.jpg

'description of rabbi goodwin'

### Rabbi Avrohom Connack

Mashgiach and Head of the bekius program

profile photo: images/rabbi-avrohom-connack.jpg

Rabbi Avrohom Connack graduated from Wits University, Johannesburg in 1985 with BSc (Hons). After serving as SAUJS chairman in 1985, he learned at Ohr Somayach Jerusalem. After further learning at a number of other yeshivos in Eretz Yisrael he returned to Ohr Somayach to take up a Talmud teaching position. He is currently a senior Talmud Rabbi in the Beis Medrash programme and he has published a series of books (entitled Beurei Avrohom) demonstrating his analytical approach to Talmud study

### Rabbi Meir Dobkin

Mashgiach and Head of the bekius program

profile photo: use placeholder

'description of rabbi dobkin'

### Rabbi Yaron Shulman

Rabbi in the Program

profile photo: use placeholder

'description of rabbi shulman'

---

Ohr Somayach is a most remarkable Yeshiva. Jews from very different spiritual backgrounds find the Yeshiva a home, whilst benefiting from a true Yeshiva experience. I find the beautiful synthesis of the different backgrounds incredible. The atmosphere of spiritual growth, the aspirations of the students, and the love of the _Rabbeim_ stimulate this fusion.

The _bochurim_ of the _Beis Medrash_ are unique in their thirst for knowledge, diligence and desire to grow. The _Beis Medrash_ is set up to enable the students to experience high-level _Iyun Gemara_ learning, and the _shiurim_ are built to facilitate this. It is somewhat astonishing to see _bochurim_ transforming into _lamdonim —_ able to understand and accurately build _a sugya_ with its _yesodot_ in just a few months of being in the _Beis Medrash_. After leaving our program, the students graduate to the highest level _shiurim_ in other renowned yeshivos*,* where they excel.





Excellent — you’re talking about a **background video hero section** (like on that Aish site), where a looping, muted video auto-plays behind text or content.

Here’s exactly how to do it 👇

------

## 🧩 The Basic HTML / CSS Setup

Here’s a minimal, modern example you can drop into your page:

```html
<section class="hero">
  <video autoplay muted loop playsinline class="background-video">
    <source src="your-video.mp4" type="video/mp4">
    <!-- Optionally add a WebM version for better compression -->
    <source src="your-video.webm" type="video/webm">
  </video>

  <div class="hero-content">
    <h1>Welcome to Our Site</h1>
    <p>Discover what makes us unique.</p>
  </div>
</section>
```

### CSS:

```css
.hero {
  position: relative;
  width: 100%;
  height: 100vh; /* full-screen hero */
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  transform: translate(-50%, -50%);
  object-fit: cover; /* ensures it fills area nicely */
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
```

------

## 🎥 Video Guidelines

To make it web-friendly:

| Setting        | Recommended                                                  |
| -------------- | ------------------------------------------------------------ |
| **Resolution** | 1080p or smaller (720p often fine)                           |
| **Length**     | 10–20 seconds max                                            |
| **Format**     | `.mp4` (H.264) + optional `.webm`                            |
| **File size**  | Try to keep under **5 MB** (ideally < 2 MB)                  |
| **Attributes** | `autoplay muted loop playsinline` — required for mobile autoplay |

> 🔇 Browsers *only* autoplay videos that are **muted** — so always include `muted` and `playsinline`.

------

## 🌐 Optimization Tips

- Serve different versions for mobile and desktop with media queries if needed.

- Add a **poster image** (static fallback) in your `<video>` tag:

  ```html
  <video autoplay muted loop playsinline poster="fallback.jpg">
  ```

------

## ⚡ Bonus: Slight Overlay for Readability

Add this for a nice dark overlay:

```css
.hero::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}
```

