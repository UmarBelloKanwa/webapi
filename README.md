# WebAPI.JS

Brief description of the library :

You can store big amount of data using my library.
This a simple example of how to use my library to store School data. This library is not like using localStorage, it is base on IndexedDB, 
so it can store amount of data than localStorage.
And the data is stored in user's browser, so you can access it always offline or online, just like how localStorage work.
Iorder to use it, import library via 'https://cdn.jsdelivr.net/gh/UmarBelloKanwa/webapi@main/library.js'
---

## Installation

Include instructions on how to install your library:

```bash
npm install your-library-name
```

## Usage

### Storage Class

The `Storage` class manages IndexedDB operations for storing data locally.

#### Example:

```javascript
// Initialize a new instance of Storage
const storage = new Storage('myDatabase');

// Open or upgrade the database and create a new object store
storage.openDatabase('create', 'myStore')
    .then(db => {
        // Perform operations on the database
        return storage.operate('add', 'myStore', { id: 1, data: 'example' });
    })
    .then(result => {
        console.log('Data added successfully:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Actions Class

The `Actions` class provides methods for speech synthesis, notifications, and various actions.

#### Example:

```javascript
// Initialize a new instance of Actions
const actions = new Actions();

// Speak a message
actions.speak('play', 'Hello, world!', 'english', 'male');

// Show a notification
actions.notify('Notification message');
```

### voiceRecord Class

The `voiceRecord` class manages audio recording using the browser's media devices.

#### Example:

```javascript
// Initialize a new instance of voiceRecord
const recorder = new voiceRecord();

// Start recording
recorder.turnVoiceRecord('play')
    .then(result => {
        // Handle voice recording
        console.log('Recording started:', result);
    })
    .catch(error => {
        console.error('Error recording:', error);
    });
```

## API Reference

### Classes

#### `Storage`

- **Constructor**: `new Storage(name)`
  - `name` (string): Name of the database.
- **Methods**:
  - `openDatabase(action, storeName)`: Opens or upgrades the database.
  - `deleteDb(name)`: Deletes the specified database.
  - `operate(action, storeName, data)`: Performs operations (add, update, delete, display) on object stores.

#### `Actions`

- **Constructor**: `new Actions()`
- **Methods**:
  - `speak(action, text, lang, speaker)`: Performs speech synthesis.
  - `notify(text)`: Shows a notification.
  - `actions(actions, data)`: Performs various actions (notify, copy, download, share).

#### `voiceRecord`

- **Methods**:
  - `turnVoiceRecord(action)`: Controls audio recording (play, pause, resume, stop).

## License

Include information about the license under which your library is distributed.

---
