const ssjs = (function() {
    return {
        isThisThingOn: function() {
            console.log('%c [SimpleSettings]: ' + '%c SimpleSettings.js is loaded properly and working!', 'background: #222; color: #bada55', 'background: #222; color: white');
        },
        init: function(obj, override, log) {
            if (!localStorage.getItem('ss')) {
                localStorage.setItem('ss', JSON.stringify(JSON.parse(obj)))
                console.log('%c [SimpleSettings][init]: ' + `%c Created a new SimpleSettings entry!`, 'background: #222; color: #bada55', 'background: #222; color: white');
            } else {
                if (override == true) {
                    localStorage.setItem('ss', JSON.stringify(JSON.parse(obj)))
                }
            }
        },
        get: function(key) {
            let json = JSON.parse(localStorage.getItem('ss'));
            if (json) {
                let value = json[key];
                return value;
            }
        },
        edit: function(key, newvalue) {
            const data = localStorage.getItem('ss');
            if (data) {
                const parsedData = JSON.parse(data);
                parsedData[key] = newvalue;
                localStorage.setItem('ss', JSON.stringify(parsedData));
                console.log('%c [SimpleSettings][edit]: ' + `%c Key "${key}" updated with value "${newvalue}"`, 'background: #222; color: #bada55', 'background: #222; color: white');
            } else {
                console.log('%c [SimpleSettings][edit]: ' + `%c SimpleSettings object not found in storage."`, 'background: #222; color: #bada55', 'background: #222; color: white');
            }
        },
        add: function(key, value) {
            const data = localStorage.getItem('ss');
            if (data) {
                const parsedData = JSON.parse(data);
                if (!parsedData.hasOwnProperty(key)) {
                    parsedData[key] = value;
                    localStorage.setItem('ss', JSON.stringify(parsedData));
                    console.log('%c [SimpleSettings][add]: ' + `%c Key "${key}" added with value "${value}".`, 'background: #222; color: #bada55', 'background: #222; color: white');
                } else {
                    console.log('%c [SimpleSettings][add]: ' + `%c Key "${key}" already exists. Use 'edit' to update the value.`, 'background: #222; color: #bada55', 'background: #222; color: white');
                }
            } else {
                console.log('%c [SimpleSettings][add]: ' + `%c SimpleSettings object not found in storage."`, 'background: #222; color: #bada55', 'background: #222; color: white');
            }
        },
        delete: function(key) {
            const data = localStorage.getItem('ss');
            if (data) {
                const parsedData = JSON.parse(data);
                if (parsedData.hasOwnProperty(key)) {
                    delete parsedData[key];
                    localStorage.setItem('ss', JSON.stringify(parsedData));
                    console.log('%c [SimpleSettings][delete]: ' + `%c Key "${key}" deleted.`, 'background: #222; color: #bada55', 'background: #222; color: white');
                } else {
                    console.log('%c [SimpleSettings][delete]: ' + `%c Key "${key}" not found.`, 'background: #222; color: #bada55', 'background: #222; color: white');
                }
            } else {
                console.log('%c [SimpleSettings][delete]: ' + `%c SimpleSettings object not found in storage."`, 'background: #222; color: #bada55', 'background: #222; color: white');
            }
        },
        all: function() {
            data = JSON.parse(localStorage.getItem('ss'));
            return data;
        },
        deleteAll: function(force) {
            if (!force) {
                const userConfirmed = window.confirm('Are you sure you want to delete all keys? This action cannot be undone.');
                if (userConfirmed) {
                    localStorage.setItem('ss', '{}');
                    console.log('%c [SimpleSettings][deleteAll]: ' + `%c All keys deleted.`, 'background: #222; color: #bada55', 'background: #222; color: white');
                } else {
                    console.log('%c [SimpleSettings][deleteAll]: ' + `%c Deletion canceled.`, 'background: #222; color: #bada55', 'background: #222; color: white');
                }
            } else {
                localStorage.setItem('ss', '{}');
                console.log('%c [SimpleSettings][deleteAll]: ' + `%c All keys deleted.`, 'background: #222; color: #bada55', 'background: #222; color: white');

            }
        }
    }
})();