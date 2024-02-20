# RevPharma Weather App

## Run

- Clone the repository
- Run `pnpm i` to install the dependencies
- Run `pnpm dev` to start the app

### Test build

- Run `pnpm build` to build the app
- Run `pnpm preview` to start the app

### Deploy

- Merge code to the `main` branch

Online: https://benjamincharity.github.io/rp-weather/

## Technical Stack Choices

The selection of the starter template and its dependencies was driven by a mix of familiarity from previous projects and a desire to explore new technologies, like PreLine UI. This approach aimed to leverage existing expertise while incorporating new elements to enhance the app's development and user experience.

This comprehensive plan for future enhancements combines technical development with user-focused design, aiming to create a more engaging, informative, and customizable weather app experience.

## Determinations for Comparison Mode

To set the weather comparison experience, I established base thresholds for different weather conditions (e.g., rain, clouds). Based on these thresholds, weather conditions are classified into three levels: normal, mid, and high. This classification aids in styling the comparison view, allowing users to visually discern weather differences more clearly.

## Future Enhancements

- **Sparklines with Overlay Mode**: Incorporating sparklines provides a compact, yet informative way to display weather trends over time. An overlay mode will allow users to compare weather sets directly, offering a clearer understanding of weather patterns.

- **Improved Design for Highlighted Conditions**: Currently, the differentiation of weather conditions relies on scale and color. Enhancing this aspect involves exploring more intuitive and visually engaging methods to highlight disparities in weather conditions, making the information immediately apparent to users.

- **Sparkline Graphs and Visualization**: Utilizing sparkline graphs for both individual weather conditions and a 5-day forecast offers users concise visual insights into weather trends, enhancing the app’s utility and allowing the user to see the daily ebbs and flows.

- **Horizontally Scrolling Forecast**: A horizontally scrolling interface for hour-by-hour forecasts improves user interaction, facilitating seamless navigation through upcoming weather changes.

- **Enhanced Weather Iconography**: More specific mapping for weather icons, including variations like partly cloudy and drizzle, provides accurate visual representations, enriching the user experience.

- **Customizable Settings**: Allowing users to personalize their forecast view by enabling or disabling specific weather information caters to individual preferences, ensuring a tailored experience.

- **Expanded Data Offering**: Incorporating comprehensive weather-related information, such as sunrise/sunset times, moon phases, and pollen counts, offers a more detailed weather outlook.

- **Robust Error Handling**: Implementing a more robust error service is essential for maintaining app reliability and functionality under various conditions.

- **User-Centric Design and Customization**: Understanding and integrating user preferences for locations, saving locations or comparison sets, and units enhance personalization and engagement with the app.

- **Enhanced Failure Handling**: Adopting stricter failure handling mechanisms, like advanced retry protocols, ensures the app’s reliability, especially in critical scenarios.

- **Research and Integration of Existing Solutions**: Exploring and integrating established libraries for functionalities like search autocomplete can streamline development and enhance user experience.

By addressing these enhancements, the weather app can significantly improve its usability, visual appeal, and overall functionality, making it more informative and user-friendly.
