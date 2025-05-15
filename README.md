# charter-reward
Doing Protected Routing by storing authentication token at local storage
design login page with required and correct credentials validation
credentials are username:admin & password: Admin@123

![Screenshot 2025-05-16 000127](https://github.com/user-attachments/assets/ec8f4ade-9eec-4396-a4dd-428b35c8b3d4)

Simulate an asynchronous API call to fetch data from local db.json file with loading state and handle error
Display API response in Tabular format, columns are Sr.No, Customer Name, Date, Amount, Monthly Points, Total Points, Actions
Table is customize with pagination by changing rows per page[5,15,25,50], with previous next buttons
useMemo for calculateMonthlyPoints()and calculateTotalPoint to avoid re-render
Data can filtered out by monthly and yearly
monthly and total points are calculated by amount


![Screenshot 2025-05-16 000858](https://github.com/user-attachments/assets/fb679ad7-a429-4150-b9d3-c460e6ceb77a)

when click on Action button particular customer transaction details are shown on modal. dynamic details are as below.

![Screenshot 2025-05-16 001704](https://github.com/user-attachments/assets/41d9e97e-9cf3-4359-804f-22c418687966)

Test Cases are added for common functions

![Screenshot 2025-05-15 235511](https://github.com/user-attachments/assets/2c8f458d-b049-4138-bef0-7de609901adc)

added Prop Validation by using PropsType for each component which has Props are passed.
camelCase naming conventions are followed, code splitted in multiple common components, With modular folder structure
style.module.css files use for styling purpose with all custom css
All the data passed as dynamic and no static data  is present.

