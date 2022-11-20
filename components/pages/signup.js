import React, {Fragment} from 'react';
import {StyleSheet, View, Platform} from "react-native";
import {useController, useForm} from 'react-hook-form';
import {Button, Checkbox, List, TextInput, Portal, Provider as PaperProvider} from 'react-native-paper';
import {FormBuilder} from "react-native-paper-form-builder";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationContainer} from '@react-navigation/native';

const SignUp = (props) => {
    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            city: '',
            gender: '',
            job: '',
            income: '',
            loan: '',
            credit: ''
        },
        mode: 'onChange',
    });

    return (
            <KeyboardAwareScrollView>
                <View style={style.container}>
                <Fragment>
                    <FormBuilder
                        control={control}
                        setFocus={setFocus}

                        formConfigArray={[
                            {
                                name: 'name',
                                type: 'text',
                                textInputProps: {
                                    label: 'Name',
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    },
                                },
                            },
                            {
                                name: 'email',
                                type: 'text',
                                textInputProps: {
                                    label: 'Age'
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Age is required',
                                    },
                                    pattern: {
                                        value:
                                            /[1-9][0-9]/,
                                        message: 'Invalid Age',
                                    },
                                },
                            },
                            {
                                name: 'password',
                                type: 'password',
                                textInputProps: {
                                    label: 'Password'
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password should be at least 8 characters',
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Password should be between 8 and 30 characters',
                                    },
                                },
                            },
                            {
                                name: 'city',
                                type: (Platform.OS === 'android') ? 'autocomplete' : 'select',
                                textInputProps: {
                                    label: 'State',
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'State is required',
                                    },
                                },
                                options: [
                                    {
                                        label: "Alabama",
                                        value: 0,
                                    },
                                    {
                                        label: "Alaska",
                                        value: 1,
                                    },
                                    {
                                        label: "Arizona",
                                        value: 2,
                                    },
                                    {
                                        label: "Arkansas",
                                        value: 3,
                                    },
                                    {
                                        label: "California",
                                        value: 4,
                                    },
                                    {
                                        label: "Colorado",
                                        value: 5,
                                    },
                                    {
                                        label: "Connecticut",
                                        value: 6,
                                    },
                                    {
                                        label: "Delaware",
                                        value: 7,
                                    },
                                    {
                                        label: "District of Columbia",
                                        value: 8,
                                    },
                                    {
                                        label: "Florida",
                                        value: 9,
                                    },
                                    {
                                        label: "Georgia",
                                        value: 10,
                                    },
                                    {
                                        label: "Hawaii",
                                        value: 11,
                                    },
                                    {
                                        label: "Idaho",
                                        value: 12,
                                    },
                                    {
                                        label: "Illinois",
                                        value: 13,
                                    },
                                    {
                                        label: "Indiana",
                                        value: 14,
                                    },
                                    {
                                        label: "Iowa",
                                        value: 15,
                                    },
                                    {
                                        label: "Kansas",
                                        value: 16,
                                    },
                                    {
                                        label: "Kentucky",
                                        value: 17,
                                    },
                                    {
                                        label: "Louisiana",
                                        value: 18,
                                    },
                                    {
                                        label: "Maine",
                                        value: 19,
                                    },
                                    {
                                        label: "Maryland",
                                        value: 20,
                                    },
                                    {
                                        label: "Massachusetts",
                                        value: 21,
                                    },
                                    {
                                        label: "Michigan",
                                        value: 22,
                                    },
                                    {
                                        label: "Minnesota",
                                        value: 23,
                                    },
                                    {
                                        label: "Mississippi",
                                        value: 24,
                                    },
                                    {
                                        label: "Missouri",
                                        value: 25,
                                    },
                                    {
                                        label: "Montana",
                                        value: 26,
                                    },
                                    {
                                        label: "Nebraska",
                                        value: 27,
                                    },
                                    {
                                        label: "Nevada",
                                        value: 28,
                                    },
                                    {
                                        label: "New Hampshire",
                                        value: 29,
                                    },
                                    {
                                        label: "New Jersey",
                                        value: 30,
                                    },
                                    {
                                        label: "New Mexico",
                                        value: 31,
                                    },
                                    {
                                        label: "New York",
                                        value: 32,
                                    },
                                    {
                                        label: "North Carolina",
                                        value: 33,
                                    },
                                    {
                                        label: "North Dakota",
                                        value: 34,
                                    },
                                    {
                                        label: "Oklahoma",
                                        value: 35,
                                    },
                                    {
                                        label: "Oregon",
                                        value: 36,
                                    },
                                    {
                                        label: "Pennsylvania",
                                        value: 37,
                                    },
                                    {
                                        label: "Rhode Island",
                                        value: 38,
                                    },
                                    {
                                        label: "South Carolina",
                                        value: 39,
                                    },
                                    {
                                        label: "South Dakota",
                                        value: 40,
                                    },
                                    {
                                        label: "Tennessee",
                                        value: 41,
                                    },
                                    {
                                        label: "Texas",
                                        value: 42,
                                    },
                                    {
                                        label: "Utah",
                                        value: 43,
                                    },
                                    {
                                        label: "Vermont",
                                        value: 44,
                                    },
                                    {
                                        label: "Virginia",
                                        value: 45,
                                    },
                                    {
                                        label: "Washington",
                                        value: 46,
                                    },
                                    {
                                        label: "West Virginia",
                                        value: 47,
                                    },
                                    {
                                        label: "Wisconsin",
                                        value: 48,
                                    },
                                    {
                                        label: "Wyoming",
                                        value: 49,
                                    },
                                ],
                            },
                            {
                                name: 'gender',
                                type: (Platform.OS === 'android') ? 'autocomplete' : 'select',
                                textInputProps: {
                                    label: 'Gender',
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Gender is required',
                                    },
                                },
                                options: [
                                    {
                                        value: 0,
                                        label: 'Female',
                                    },
                                    {
                                        value: 1,
                                        label: 'Male',
                                    },
                                    {
                                        value: 2,
                                        label: 'Non-Binary',
                                    },
                                    {
                                        value: 3,
                                        label: 'Prefer not to say',
                                    }
                                ],
                            },
                            {
                                name: 'job',
                                type: (Platform.OS === 'android') ? 'autocomplete' : 'select',
                                textInputProps: {
                                    label: 'Job',
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Job is required',
                                    },
                                },
                                options: [
                                    {
                                        label: "Retail Salespersons",
                                        value: 0,
                                    },
                                    {
                                        label: "Home Health and Personal Care Aides",
                                        value: 1,
                                    },
                                    {
                                        label: "Cashiers",
                                        value: 2,
                                    },
                                    {
                                        label: "Fast Food and Counter Workers",
                                        value: 3,
                                    },
                                    {
                                        label: "Registered Nurses",
                                        value: 4,
                                    },
                                    {
                                        label: "General and Operations Managers",
                                        value: 5,
                                    },
                                    {
                                        label: "Customer Service Representatives",
                                        value: 6,
                                    },
                                    {
                                        label: "Laborers and Freight, Stock, and Material Movers, Hand",
                                        value: 7,
                                    },
                                    {
                                        label: "Office Clerks, General",
                                        value: 8,
                                    },
                                    {
                                        label: "Stockers and Order Fillers",
                                        value: 9,
                                    },
                                    {
                                        label: "Janitors and Cleaners, Except Maids and Housekeeping Cleaners",
                                        value: 10,
                                    },
                                    {
                                        label: "Heavy and Tractor-Trailer Truck Drivers",
                                        value: 11,
                                    },
                                    {
                                        label: "Secretaries and Administrative Assistants, Except Legal, Medical, and Executive",
                                        value: 12,
                                    },
                                    {
                                        label: "Waiters and Waitresses",
                                        value: 13,
                                    },
                                    {
                                        label: "Bookkeeping, Accounting, and Auditing Clerks",
                                        value: 14,
                                    },
                                    {
                                        label: "Maintenance and Repair Workers, General",
                                        value: 15,
                                    },
                                    {
                                        label: "First-Line Supervisors of Office and Administrative Support Workers",
                                        value: 16,
                                    },
                                    {
                                        label: "First-Line Supervisors of Retail Sales Workers",
                                        value: 17,
                                    },
                                    {
                                        label: "Accountants and Auditors",
                                        value: 18,
                                    },
                                    {
                                        label: "Software Developers",
                                        value: 19,
                                    },
                                    {
                                        label: "Miscellaneous Assemblers and Fabricators",
                                        value: 20,
                                    },
                                    {
                                        label: "Elementary School Teachers, Except Special Education",
                                        value: 21,
                                    },
                                    {
                                        label: "Construction Laborers",
                                        value: 22,
                                    },
                                    {
                                        label: "Nursing Assistants",
                                        value: 23,
                                    },
                                    {
                                        label: "Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific Products",
                                        value: 24,
                                    },
                                    {
                                        label: "Managers, All Other",
                                        value: 25,
                                    },
                                    {
                                        label: "Cooks, Restaurant",
                                        value: 26,
                                    },
                                    {
                                        label: "Maids and Housekeeping Cleaners",
                                        value: 27,
                                    },
                                    {
                                        label: "Teaching Assistants, Except Postsecondary",
                                        value: 28,
                                    },
                                    {
                                        label: "Landscaping and Groundskeeping Workers",
                                        value: 29,
                                    },
                                    {
                                        label: "Business Operations Specialists, All Other",
                                        value: 30,
                                    },
                                    {
                                        label: "Light Truck Drivers",
                                        value: 31,
                                    },
                                    {
                                        label: "First-Line Supervisors of Food Preparation and Serving Workers",
                                        value: 32,
                                    },
                                    {
                                        label: "Security Guards",
                                        value: 33,
                                    },
                                    {
                                        label: "Sales Representatives of Services, Except Advertising, Insurance, Financial Services, and Travel",
                                        value: 34,
                                    },
                                    {
                                        label: "Secondary School Teachers, Except Special and Career/Technical Education",
                                        value: 35,
                                    },
                                    {
                                        label: "Receptionists and Information Clerks",
                                        value: 36,
                                    },
                                    {
                                        label: "Management Analysts",
                                        value: 37,
                                    },
                                    {
                                        label: "Childcare Workers",
                                        value: 38,
                                    },
                                    {
                                        label: "Carpenters",
                                        value: 39,
                                    },
                                    {
                                        label: "Farmers, Ranchers, and Other Agricultural Managers",
                                        value: 40,
                                    },
                                    {
                                        label: "Lawyers",
                                        value: 41,
                                    },
                                    {
                                        label: "Food Preparation Workers",
                                        value: 42,
                                    },
                                    {
                                        label: "Shipping, Receiving, and Inventory Clerks",
                                        value: 43,
                                    },
                                    {
                                        label: "Market Research Analysts and Marketing Specialists",
                                        value: 44,
                                    },
                                    {
                                        label: "Cooks, Fast Food",
                                        value: 45,
                                    },
                                    {
                                        label: "Human Resources Specialists",
                                        value: 46,
                                    },
                                    {
                                        label: "Project Management Specialists",
                                        value: 47,
                                    },
                                    {
                                        label: "Industrial Truck and Tractor Operators",
                                        value: 48,
                                    },
                                    {
                                        label: "Medical Assistants",
                                        value: 49,
                                    },
                                ],
                            },
                            {
                                name: 'income',
                                type: 'text',
                                textInputProps: {
                                    label: 'Income'
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Income is required',
                                    },
                                    pattern: {
                                        value:
                                            /^\d+$/,
                                        message: 'Invalid Income',
                                    },
                                },
                            },
                            {
                                name: 'loan',
                                type: 'text',
                                textInputProps: {
                                    label: 'Loan & Debt',
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Loan and Debt is required',
                                    },
                                    pattern: {
                                        value:
                                            /^\d+$/,
                                        message: 'Invalid Income',
                                    },
                                },
                            },
                            {
                                name: 'credit',
                                type: 'select',
                                textInputProps: {
                                    label: 'Credit Score',
                                },
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Credit Score is required',
                                    },
                                },
                                options: [
                                    {
                                        value: 0,
                                        label: '100',
                                    },
                                    {
                                        value: 1,
                                        label: '200',
                                    },
                                    {
                                        value: 2,
                                        label: '300',
                                    },
                                    {
                                        value: 3,
                                        label: '400',
                                    },
                                    {
                                        value: 4,
                                        label: '500',
                                    },
                                    {
                                        value: 5,
                                        label: '600',
                                    },
                                    {
                                        value: 6,
                                        label: '700',
                                    },
                                    {
                                        value: 7,
                                        label: '800',
                                    },
                                ],
                            },
                        ]}
                    />
                    <Button style={{marginLeft: "60%"}} mode={'contained'} onPress={props.navigation.navigate("home")}>
                        Submit
                    </Button>
                </Fragment>
                </View>

            </KeyboardAwareScrollView>

    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: "5%"
    },
});

export default SignUp;