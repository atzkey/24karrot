import optionsStorage from '../options-storage';
import browser from 'webextension-polyfill';

optionsStorage.getAll().then(({maxRecentCouses: maxRecentCourses, courseHistory}) => {
    const courses = Object.keys(courseHistory);
    const $container = document.getElementById('last-visited-courses');

    const _lastUrl = (course) => {
        return courseHistory[course]['url'];
    }

    if (courses.length === 0) {
        return;
    }

    $container.innerHTML = '';

    courses
        .sort((a, b) => courseHistory[b]['ts'] - courseHistory[a]['ts'])
        .slice(0, maxRecentCourses)
        .forEach((c) => {
            let $wrapper = document.createElement('div');
            let $courseLink = document.createElement('a');

            $wrapper.className = 'panel-list-item';

            $courseLink.innerText = c;
            $courseLink.href = _lastUrl(c);
            $courseLink.className = 'text';
            $courseLink.addEventListener('click', () => {
                browser.tabs.query({currentWindow: true, active: true}).then(([tab,,]) => {
                    browser.tabs.update(tab.id, {url: _lastUrl(c)});
                });
            });

            $wrapper.append($courseLink);
            $container.append($wrapper);
        });
});
