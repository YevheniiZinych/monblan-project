const galleryData = [
  {
    imageUrl: "./img/gallery/1.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/2.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/3.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/4.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/5.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/6.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/7.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/8.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/9.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/1.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/2.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/3.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/4.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/5.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/6.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/7.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/8.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
  {
    imageUrl: "./img/gallery/9.jpg",
    title: "Today",
    uploadLabel: "Image upload",
    uploadDate: "06-06-2026",
    todayLikes: 128,
    todayComments: 31,
    secondaryLikes: 67,
    secondaryComments: 22,
  },
];

// Refs
const headerDatepickerInput = document.querySelector("#header-datepicker");
const headerDatepickerToggle = document.querySelector(".header__datepicker-toggle");
const headerDatepickerClear = document.querySelector(".header__datepicker-clear");
const galleryList = document.querySelector(".gallery__list");
const galleryLoadMoreButton = document.querySelector(".gallery__load-more");
const galleryRowsViewButton = document.querySelector(".gallery__view-rows");
const galleryGridViewButton = document.querySelector(".gallery__view-grid");

const GALLERY_PAGE_SIZES = {
  rows: 9,
  grid: 8,
};

let currentGalleryView = "rows";
let visibleGalleryItemsCount = GALLERY_PAGE_SIZES.rows;
let currentGalleryDate = new Date();

// Normalize date for input to format 09_08_2016
const formatHeaderDate = (date) => {
  if (!(date instanceof Date)) {
    return "";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}_${month}_${year}`;
};

// Normalize date for gallery to format 09-08-2016
const formatGalleryDate = (date) => {
  if (!(date instanceof Date)) {
    return "";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const createGalleryItemTemplate = (item, currentDate) => `
  <li class="gallery__item">
    <div class="gallery__item-img-wrap">
      <img src="${item.imageUrl}" alt="user image" loading="lazy" />
    </div>
    <div class="gallery__item-content-wrap">
      <div class="gallery__item-today gallery__item-content">
        <span class="gallery__item-today-title">${item.title}</span>
        <div class="gallery__action-container">
          <div class="gallery__item-today-likes gallery__action-content">
            <img
              class="gallery__item-today-likes-icon like-icon"
              src="./img/svg/heart-icon.svg"
              alt="heart likes icon"
              loading="lazy"
            />
            <span class="gallery__item-today-likes-count">${item.todayLikes}</span>
          </div>
          <div class="gallery__item-today-comments gallery__action-content">
            <img
              class="gallery__item-today-comment-icon comment-icon"
              src="./img/svg/coment-icon.svg"
              alt="heart comment icon"
              loading="lazy"
            />
            <span class="gallery__item-today-comment-count">${item.todayComments}</span>
          </div>
        </div>
      </div>
      <div class="gallery__item-current gallery__item-content">
        <span class="gallery__item-current-time">${formatGalleryDate(currentDate)}</span>
        <div class="gallery__action-container">
          <div class="gallery__item-current-likes gallery__action-content">
            <img
              class="gallery__item-current-likes-icon like-icon"
              src="./img/svg/heart-icon.svg"
              alt="heart likes icon"
              loading="lazy"
            />
            <span class="gallery__item-current-likes-count">${item.secondaryLikes}</span>
          </div>
          <div class="gallery__item-current-comments gallery__action-content">
            <img
              class="gallery__item-current-comment-icon comment-icon"
              src="./img/svg/coment-icon.svg"
              alt="heart comment icon"
              loading="lazy"
            />
            <span class="gallery__item-current-comment-count">${item.secondaryComments}</span>
          </div>
        </div>
      </div>
      <div class="gallery__item-upload gallery__item-content">
        <span class="gallery__item-upload-test">${item.uploadLabel}</span>
        <span class="gallery__item-upload-date">${item.uploadDate}</span>
      </div>
    </div>
  </li>
`;

const updateGalleryLoadMoreButtonState = () => {
  if (!galleryLoadMoreButton) {
    return;
  }

  const isAllItemsVisible = visibleGalleryItemsCount >= galleryData.length;

  galleryLoadMoreButton.disabled = isAllItemsVisible;
};

const syncGalleryViewState = () => {
  if (!galleryList) {
    return;
  }

  galleryList.classList.toggle("is-grid", currentGalleryView === "grid");

  galleryRowsViewButton?.classList.toggle("is-active", currentGalleryView === "rows");
  galleryGridViewButton?.classList.toggle("is-active", currentGalleryView === "grid");

  galleryRowsViewButton?.setAttribute("aria-pressed", String(currentGalleryView === "rows"));
  galleryGridViewButton?.setAttribute("aria-pressed", String(currentGalleryView === "grid"));
};

const renderGallery = () => {
  if (!galleryList) {
    return;
  }

  const visibleItems = galleryData.slice(0, visibleGalleryItemsCount);

  galleryList.innerHTML = visibleItems
    .map((item) => createGalleryItemTemplate(item, currentGalleryDate))
    .join("");

  syncGalleryViewState();
  updateGalleryLoadMoreButtonState();
};

const setGalleryView = (view) => {
  if (!(view in GALLERY_PAGE_SIZES) || currentGalleryView === view) {
    return;
  }

  currentGalleryView = view;
  visibleGalleryItemsCount = GALLERY_PAGE_SIZES[view];
  renderGallery();
};

if (galleryList) {
  renderGallery();

  galleryLoadMoreButton?.addEventListener("click", () => {
    visibleGalleryItemsCount += GALLERY_PAGE_SIZES[currentGalleryView];
    renderGallery();
  });

  galleryRowsViewButton?.addEventListener("click", () => {
    setGalleryView("rows");
  });

  galleryGridViewButton?.addEventListener("click", () => {
    setGalleryView("grid");
  });
}

// Datepicker config
const englishDatepickerLocale = {
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  today: "Today",
  clear: "Clear",
  dateFormat: formatHeaderDate,
  firstDay: 0,
};

// Datepicker instance
if (headerDatepickerInput && typeof AirDatepicker === "function") {
  const defaultSelectedDate = new Date(2016, 7, 9);
  const today = new Date();

  const headerDatepicker = new AirDatepicker(headerDatepickerInput, {
    autoClose: true,
    locale: englishDatepickerLocale,
    startDate: defaultSelectedDate,
    maxDate: today,
    firstDay: 0,
    dateFormat: formatHeaderDate,
    navTitles: {
      days: "MMMM yyyy",
      months: "yyyy",
      years: "yyyy1 - yyyy2",
    },
    prevHtml: '<img src="./img/svg/arrow-left-icon.svg" alt="" width="14" height="14">',
    nextHtml: '<img src="./img/svg/arrow-right-icon.svg" alt="" width="14" height="14">',
    position: "bottom left",
    offset: 8,
    onSelect({ date, formattedDate }) {
      headerDatepickerInput.value = formattedDate || "";
      currentGalleryDate = date instanceof Date ? date : new Date();
      renderGallery();
    },
  });

  headerDatepickerToggle?.addEventListener("click", () => {
    headerDatepickerInput.focus();
    headerDatepicker.show();
  });

  headerDatepickerClear?.addEventListener("click", () => {
    headerDatepicker.clear();
    headerDatepickerInput.value = "";
    currentGalleryDate = new Date();
    renderGallery();
  });
}
