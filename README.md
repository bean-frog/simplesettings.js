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
- `ssjs.edit(key, newvalue);` - update an item
    - Usage: updates the given key with the new value. pretty self explanatory.
    - Example snippet:
    ```javascript
    ssjs.edit('Foo', 'New value for Foo'); //'Foo' will be changed
    ```
- `ssjs.add(key, value)` - add an item
    - Usage: adds a new item to the settings, such as when you have an item that isn't added in init();
    - Example snippet:
    ```javascript
    ssjs.add('newFoo', 'newBar'); // key 'newFoo' now exists
    ```
- `ssjs.delete(key)` - delete an item
    - Usage: deletes an item from the settings object, when you don't need it anymore or whatever
    - Example snippet:
    ```javascript
    ssjs.delete('Foo') //Foo is gone
    ```
- `ssjs.deleteAll(force)` - delete everything
    - Usage: clears the entire settings object. pass `true` to the arg to bypass the confirmation popup.
    - Example snippet:
    ```javascript
    ssjs.deleteAll() // opens a confirmation popup
    ssjs.deleteAll(true) // just removes everything with no confirmation
- `ssjs.all()` - returns the entire parsed settings JSON
    - Usage: gives you a parsed JSON object containing all the settings.
    - Example snippet:
    ```javascript
    let settings = ssjs.all();
    console.log(settings);
   //outputs all settings to console
    ```
