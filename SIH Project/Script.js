document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const pages = document.querySelectorAll(".page");
  const bgImage = document.querySelector(".bg-image");

  // Sample data for profiles
  const networkProfiles = [
    {
      name: "Swaraj Samantaray",
      designation: "CyberSecurity Engineer",
      image: "swaraj.jpg",
    },
    {
      name: "Neha Swain",
      designation: "MERN Stack Developer",
      image: "neha.jpg",
    },
    {
      name: "Jagannath Das",
      designation: "Odoo Developer",
      image: "jaga.jpg",
    },
    {
      name: "Jagat Jyoti Dash",
      designation: "MERN Stack Developer",
      image: "jagat.jpg",
    },
  ];

  const mentorshipProfiles = [
    {
      name: "Amlan swoyam sourav",
      designation: "Software Developer",
      image: "amlan.jpg",
    },
    {
      name: "Chandan Kumar Sahoo",
      designation: "Security Engineer",
      image: "chandan.jpg",
    },
    {
      name: "Ch Sulipta Praharaj",
      designation: "Associate business Development",
      image: "suli.jpg",
    },
  ];

  let currentNetworkIndex = 0;
  let currentMentorshipIndex = 0;

  // Sample data for events
  const events = [
    {
      title: "Annual Alumni Meetup 2024",
      date: "October 25, 2024",
      description:
        "Join us for a day of networking and reconnecting with fellow alumni. Location: GIET Auditorium.",
    },
    {
      title: "Career Guidance Workshop",
      date: "November 10, 2024",
      description:
        "A workshop on career development and mentorship opportunities with industry experts.",
    },
    {
      title: "Startup & Entrepreneurship Panel",
      date: "December 5, 2024",
      description:
        "Listen to successful alumni share their journey of building a startup from scratch.",
    },
  ];

  // Function to show a specific page
  const showPage = (pageId) => {
    pages.forEach((page) => {
      page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
  };

  // Function to update the background image
  const setBackgroundImage = (imageUrl) => {
    // Not needed as the bg image is static, but this is how you would do it
    // bgImage.style.backgroundImage = `url('${imageUrl}')`;
  };

  // Function to render a single profile card
  const renderProfile = (profile, elementId) => {
    const profileElement = document.getElementById(elementId);
    profileElement.innerHTML = `
                    <img src="${profile.image}" alt="${profile.name}">
                    <h3>${profile.name}</h3>
                    <p class="text-sm font-semibold text-gray-600">${profile.designation}</p>
                    <button class="font-bold text-sm">More Info</button>
                `;
  };

  // Function to render events
  const renderEvents = () => {
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = events
      .map(
        (event) => `
                    <div class="event-item">
                        <h3 class="font-bold text-xl">${event.title}</h3>
                        <p class="text-gray-500">${event.date}</p>
                        <p class="mt-2 text-gray-700">${event.description}</p>
                    </div>
                `
      )
      .join("");
  };

  // Handle nav link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      const pageId = link.dataset.page + "-page";
      showPage(pageId);
    });
  });

  // Handle network profile navigation
  document.getElementById("next-network").addEventListener("click", () => {
    currentNetworkIndex = (currentNetworkIndex + 1) % networkProfiles.length;
    renderProfile(networkProfiles[currentNetworkIndex], "network-profile");
  });
  document.getElementById("prev-network").addEventListener("click", () => {
    currentNetworkIndex =
      (currentNetworkIndex - 1 + networkProfiles.length) %
      networkProfiles.length;
    renderProfile(networkProfiles[currentNetworkIndex], "network-profile");
  });

  // Handle mentorship profile navigation
  document.getElementById("next-mentorship").addEventListener("click", () => {
    currentMentorshipIndex =
      (currentMentorshipIndex + 1) % mentorshipProfiles.length;
    renderProfile(
      mentorshipProfiles[currentMentorshipIndex],
      "mentorship-profile"
    );
  });
  document.getElementById("prev-mentorship").addEventListener("click", () => {
    currentMentorshipIndex =
      (currentMentorshipIndex - 1 + mentorshipProfiles.length) %
      mentorshipProfiles.length;
    renderProfile(
      mentorshipProfiles[currentMentorshipIndex],
      "mentorship-profile"
    );
  });

  // Initial rendering
  renderProfile(networkProfiles[currentNetworkIndex], "network-profile");
  renderProfile(
    mentorshipProfiles[currentMentorshipIndex],
    "mentorship-profile"
  );
  renderEvents();
});
