# RevPharma Weather App

## Run

- Clone the repository
- Run `pnpm i` to install the dependencies
- Run `pnpm dev` to start the app

### Test build

- Run `pnpm build` to build the app
- Run `pnpm preview` to start the app

### Deploy

- Merge code to the base (`main`) branch.

Online: https://rp-weather.vercel.app/

## Technical Stack Choices

### Deployment

I decided to deploy my project to Vercel instead of GitHub Pages for a few reasons. While not every modern stack requires a server for the front end, it is becoming increasingly common and valuable in certain circumstances. My current "best practices" stack is deployed to edge functions on Vercel or another similar service.

I did waiver, as it is not usual to ignore a requirement. However, in the role we are discussing, I will be expected to make and explain these types of decisions. So, I took the initiative to choose Vercel for deployment speed, hosting speed, and overall reliability.

Beyond that, it's not a fair comparison, as neither option requires us to consider cost due to project scale. But, in a real-world project, we would discuss expected scale, and based on your current integrations with Azure, I would likely leverage Azure App Service and Azure Functions.

If deploying to GitHub Pages is necessary, please let me know so I can rework it to deploy statically.

### Frontend

The selection of the starter template and its dependencies was driven by a mix of familiarity from previous projects and a desire to explore new technologies, like PreLine UI. This approach aimed to leverage existing expertise while incorporating new elements to enhance the app's development and user experience.

This comprehensive plan for future enhancements combines technical development with user-focused design, aiming to create a more engaging, informative, and customizable weather app experience.

While I didn't have time to implement saved views, by storing the location state in the URL, it is easy to bookmark a specific location or compare view.

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
- **Lazy loading and bundle splitting**: Implementing lazy loading and bundle splitting can significantly improve the app’s performance, especially for mobile users.
- **More engaging empty states**: Enhancing the app’s empty states with engaging visuals and helpful tips can improve user experience and retention.
- **Leverage PWA and Service Workers**: Implementing PWA and service workers can significantly enhance the app’s performance and user experience, especially in low-connectivity scenarios. It also provides an opportunity to explore push notifications for weather alerts.

By addressing these enhancements, the weather app can significantly improve its usability, visual appeal, and overall functionality, making it more informative and user-friendly.
