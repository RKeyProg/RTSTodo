(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) c(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && c(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function c(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = d(n);
    fetch(n.href, o);
  }
})();
const a = document.getElementById("complitedTasks"),
  l = document.getElementById("uncomplitedTasks"),
  u = document.getElementById("addTaskForm"),
  s = document.getElementById("inputTask");
u.addEventListener("submit", (e) => {
  if ((e.preventDefault(), s.value === "")) {
    alert("Enter the correct value");
    return;
  }
  i(s.value), (s.value = "");
});
function i(e) {
  let t = document.querySelector(".task_uncomplited").cloneNode(!0);
  (t.querySelector("span").textContent = e), l.appendChild(t);
}
document.body.addEventListener("click", function (e) {
  const t = e.target;
  if (t.closest(".task_uncomplited")) m(t.closest(".task_uncomplited"));
  else if (t.closest(".task_complited")) p(t.closest(".task_complited"));
  else return;
});
function m(e) {
  const t = e;
  (t.className = "task task_complited app__element element_shadow_inset"),
    e.parentNode.removeChild(e),
    a.appendChild(t);
}
function p(e) {
  const t = e;
  (t.className = "task task_uncomplited app__element element_shadow"),
    e.parentNode.removeChild(e),
    l.appendChild(t);
}
const f = document.getElementById("addBtn");
f.addEventListener("click", () => {
  let e = prompt("Enter new task");
  if (e === "") {
    alert("Enter the correct value");
    return;
  }
  i(e);
});
const T = document.getElementById("hamburger");
T.addEventListener("click", (e) => {
  e.preventDefault(), alert("This function is not available");
});
