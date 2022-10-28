using System;

namespace MyApp
{
    class Employee
    {
        private int _id;
        private string _firstName;
        private string _lastName;
        
        Employee(int id, string lastName, string firstName)
        {
            _id = id;
            _lastName = lastName;
            _firstName = firstName;
        }
        public string GetName()
        {
            string fullName = String.format("{0}, {1}", _lastName, _firstName);
            return fullName;
        }
        public void SetName(string lastName, string firstName)
        {
            _lastName = lastName;
            _firstName = firstName;
        }
    }
}