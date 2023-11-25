# simplesettings.js
simplesettings.js is a small javascript library that makes it easy to save, load, and edit user settings in the browser.

### How does it work?
simplesettings.js simply creates a JSON object stored under a key in the browser's Local Storage. <br>
the library provides several functions to quickly get, edit, delete, or create any value or key in this JSON.

### Installation
its super easy- simply paste this script tag into the head of your HTML document: <br>
```html
<script src="https://cdn.jsdelivr.net/gh/bean-frog/simplesettings.js/simplesettings.js"></script>
```

### Functions
- `ssjs.isThisThingOn();` - A basic ping command.<br> 
    - Usage: To test if SimpleSettings is referenced correctly.
    - Example snippet:
    ```javascript
    ssjs.isThisThingOn(); //Console should display a success message
    ```
    <br>
- `ssjs.init(obj, override)` - Initialize the SimpleSettings entry. 
    - Usage: Initialize the SimpleSettings entry. `obj` is an object containing your settings and/or defaults. If there is already an entry saved in the storage and you want to override it, simply pass `true` to the `override` argument. Otherwise just leave it blank.
    - Example snippet: 
    ```javascript
    const mySettings = `
    {
        "settingName": "Default Value",
        "Foo": "Bar",
        "bean": "frog" 
    }
    `
    ssjs.init(mySettings);

    //OR, if you want to override existing settings (if applicable)

    ssjs.init(mySettings, true);
    ```
- `ssjs.get(key)` - Get the value of a key within the settings object.
    - Usage: returns the value of the given key. Use anywhere you need to get your settings value.
    - Example snippet:
    ```javascript
    ssjs.get('Foo'); //returns Bar

    //example usage to set text content of an element

    let element = document.getElementById('myElement');
    element.textContent = ssjs.get('bean');
    //element will now display 'frog'
    ```
