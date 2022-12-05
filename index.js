const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/Human_Resource';

const EmployeeSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        lastCompany: {
            type: String,
        },
        lastSalary: {
            type: Number,
        },
        overallExp: {
            type: Number,
        },
        contactInfo: {
            type: Number,
        },
        yearGrad: {
            type: Number,
        },
        gradStream: {
            type: String,
        },
    }
);

async function main() {
    console.log('Connecting...');
    try {
        await mongoose.connect(url);
        console.log('Connected....');
        const EmployeeModel = mongoose.model('employees', EmployeeSchema);

        //Q1. Query the collection ""employee"" and list all the documents
        const employee1 = new EmployeeModel({
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
        })
        const employee2 = new EmployeeModel({
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
        })
        const employee3 = new EmployeeModel({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
        })
        const employee4 = new EmployeeModel({
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
        })
        const employee5 = new EmployeeModel({
            "firstName": "Jame",
            "lastName": "roh",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
        })
        const employee6 = new EmployeeModel({
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
        })
        const employee7 = new EmployeeModel({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
        })
        const employee8 = new EmployeeModel({
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
        })
        const employee9 = new EmployeeModel({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
        })
        const employee10 = new EmployeeModel({
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
        })
        const employee11 = new EmployeeModel({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
        })
        const employee12 = new EmployeeModel({
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
        })
        const employee13 = new EmployeeModel({
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
        })
        const employeeArr = [
            employee1,
            employee2,
            employee3,
            employee4,
            employee5,
            employee6,
            employee7,
            employee8,
            employee9,
            employee10,
            employee11,
            employee12,
            employee13,
        ];

        const response = await EmployeeModel.insertMany(employeeArr);
        console.log("response", response);
        console.log('Saved...');

        //Q2. Query the collection ""employee"" and list the employees who are having salary more than 30000

        const salary = await EmployeeModel.find({ salary: { $gt: '30000' } })
        console.log(salary);

        //Q3. Query the collection ""employee"" and list the employees who are having experience more than 2 years.

        const Exp = await EmployeeModel.find({ overallExp: { $gt: '2' } })
        console.log(Exp);

        //Q4. Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year
        const graduated = await EmployeeModel.find({
            $and: [
                {
                    yearGrad: { $gt: "2015" },
                },
                {
                    overallExp: { $gt: "1" },
                },
            ],
        });
        console.log(graduated);

        // const graduated = await EmployeeModel.find({ yearGrad: '2015' }, { overallExp: { $gt: '1' } });
        // console.log(graduated);

        //Q5. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

        const updateSalary = await EmployeeModel.updateMany({ salary: { $gt: '70000' } }, { $set: { salary: '65000' } })
        console.log(updateSalary);

        //Q6. Delete all the documents from ""employee"" where last company is Y";

        const company = await EmployeeModel.deleteMany({ lastCompany: 'Y' });
        console.log(company);
    } catch (error) {
        console.log(error);
    }
}
main();