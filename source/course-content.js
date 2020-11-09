import optionsStorage from './options-storage';

const courseNameRe = /\/learn\/uol-([^\/]+)\//;

function recordCourseHistoryChange() {
    const url = window.location.href;
    const match = url.match(courseNameRe);
    const ts = Date.now();
    const course = match[1];

    if (course) {
        optionsStorage.getAll().then(({courseHistory}) => {
            let courseVisit = courseHistory[course] || {};
            courseHistory[course] = {...courseVisit, ts, url}
            optionsStorage.set({courseHistory});
        });
    }
}

function handleContentChange() {
    recordCourseHistoryChange();
}

let observer = new MutationObserver(handleContentChange);
observer.observe(document.documentElement, {subtree: true, childList: true});
