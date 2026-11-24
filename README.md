# SeriesHub

SeriesHub is a web application for displaying TV series and their information.  
The system allows users to view series details, seasons and episodes, save series, and sort or filter series by year and availability.

## Running the Project

To run the project locally:

1. Open the project folder in the terminal.
2. Install the required packages:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the address shown in the terminal in your browser.

## Questions & Answers

### Why didn't the screen update when `votes` changed?

The `votes` variable changed in memory, but React did not know that the value had changed, so it did not update the screen.

`useState` is used to store data as part of the component's state. When we change the value using `setVotes`, React knows that the state changed and renders the component again with the updated value.

### Why did we use `item.id` as the `key` in `SeriesList`?

We used `item.id` because every series has a unique and stable ID.

Using the array index as a `key` is not recommended because the position of an item can change when the list is sorted or filtered. This can cause React to identify the wrong item and lead to unexpected behavior.

### Why did we sort a copy of the array in C3?

We used `[...displayedSeries]` to create a copy before sorting.

The `sort()` function changes the original array. If we sorted `series` directly, the original order of the series would change, which could affect other parts of the application that use the same array.

By sorting a copy, we keep the original `series` array unchanged.