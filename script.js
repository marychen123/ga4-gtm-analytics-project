// ------------------------------------------------------------
// Northstar Analytics - demo tracking implementation
// ------------------------------------------------------------

// GTM listens to the global dataLayer array.
// Never overwrite dataLayer after GTM has loaded.
window.dataLayer = window.dataLayer || [];

/**
 * Helper function used only to keep our demo code tidy.
 * It pushes one JavaScript object into the dataLayer.
 */
function pushToDataLayer(eventObject) {
  window.dataLayer.push(eventObject);
  console.log("dataLayer push:", eventObject);
}

// ------------------------------------------------------------
// 1. Hero CTA
// ------------------------------------------------------------
// We deliberately track this as a custom event because we want
// to know which CTA was clicked and where it appeared.
document.querySelectorAll(".js-cta").forEach((button) => {
  button.addEventListener("click", () => {
    pushToDataLayer({
      event: "cta_click",
      cta_text: button.dataset.ctaText,
      cta_location: button.dataset.ctaLocation
    });

    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ------------------------------------------------------------
// 2. Service selection
// ------------------------------------------------------------
// select_content is a GA4 recommended event name.
// In GTM we can map these dataLayer values to GA4 parameters.
document.querySelectorAll(".js-service").forEach((button) => {
  button.addEventListener("click", () => {
    pushToDataLayer({
      event: "select_content",
      content_type: "analytics_service",
      item_id: button.dataset.serviceCategory,
      service_name: button.dataset.serviceName
    });
  });
});

// ------------------------------------------------------------
// 3. Lead generation
// ------------------------------------------------------------
// generate_lead is a GA4 recommended event.
// We send only non-PII analytics parameters.
// NEVER send the person's name or email address into GA4.
const leadForm = document.querySelector("#lead-form");
const formMessage = document.querySelector("#form-message");

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const interest = document.querySelector("#interest").value;

  pushToDataLayer({
    event: "generate_lead",
    form_name: "measurement_review",
    lead_interest: interest,
    lead_source: "portfolio_demo"
  });

  formMessage.textContent = "Thanks — demo lead event triggered successfully.";
  leadForm.reset();
});

// ------------------------------------------------------------
// Optional debugging tip:
// Open Chrome DevTools > Console and type:
// dataLayer
// You can inspect every object pushed during the session.
// ------------------------------------------------------------
