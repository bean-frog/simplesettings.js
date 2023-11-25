var ssjs = (function() {
    return {
        isThisThingOn: function() {
            console.log('%c [SimpleSettings]: ' + '%c SimpleSettings.js is loaded properly and working!', 'background: #222; color: #bada55', 'background: #222; color: white');

        },
        init: function(obj, override) {
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
            let value = json[key];
            return value;
        }
        

    }
})();