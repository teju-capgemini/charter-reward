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

![Screenshot 2025-05-19 121316](https://github.com/user-attachments/assets/33b44041-4482-4064-8ec7-b7304e178f4d)

when click on Action button particular customer transaction details are shown on modal. dynamic details are as below.

![Screenshot 2025-05-19 121432](https://github.com/user-attachments/assets/253dca34-0ecf-4eb1-baa2-97306d98b080)

Test Cases are added for common functions

![Screenshot 2025-05-19 120757](https://github.com/user-attachments/assets/e9ca3a76-0ec6-45ee-873d-829f0a0acaae)

added Prop Validation by using PropsType for each component which has Props are passed.
camelCase naming conventions are followed, code splitted in multiple common components, With modular folder structure
style.module.css files use for styling purpose with all custom css
All the data passed as dynamic and no static data  is present.

