using System;
using System.Collections.Generic;
using System.Linq;

public class ClientsApp
{
    static void Main()
    {
        string[] lines = System.IO.File.ReadAllLines(@"people.in");
        
        string[] rolePriority = {"chief", "president", "director", "executive"};
        string[] industryPriority = {"Technology", "Software", "Information", "Banking", "Biotechnology", "Services", "Computer", "Telecommunications","Recruiting","Development","Internet","Resources","E-Learning"};
        string[] countryPriority = {"United States", "Canada"};

        List<string> allIndustries = new List<string>();
        List<string> allCountries = new List<string>();
        List<string> allRoles = new List<string>();
        
        int count = 0;
        int global = 0;
        HR person = new HR();
        List<HR> humanResources = new List<HR>();
       foreach (string line in lines)
        {
            string[] subText = line.Split(new string[] {"|"}, StringSplitOptions.None);

            foreach (string str in subText)
            {
                switch (count)
                {
                    case 0:
                        person.id = str;
                        Console.WriteLine(person.id);
                        count++;
                    break;
                    case 1:
                        person.name = str;
                        Console.WriteLine(person.name);
                        count++;
                    break;
                    case 2:
                        person.lname = str;
                        Console.WriteLine(person.lname);
                        count++;
                    break;
                    case 3:
                        person.role = str;
                        Console.WriteLine(person.role);
                         if(!allRoles.Contains(str))
                        {
                            allRoles.Add(str);
                        }
                        count++;
                    break;
                    case 4:
                        person.country = str;
                        Console.WriteLine(person.country);
                        if(!allCountries.Contains(str))
                        {
                            allCountries.Add(str);
                        }
                        count++;
                    break;
                    case 5:           
                        person.industry = str;
                        Console.WriteLine(person.industry);
                        if(!allIndustries.Contains(str))
                        {
                            allIndustries.Add(str);
                        }
                        count++;
                    break;
                    case 6:
                        person.recomendations = str;
                        Console.WriteLine(person.recomendations);
                        count++;
                    break;
                    case 7:
                        person.connections = str;
                        Console.WriteLine(person.connections);
                        humanResources.Add(person);
                        person = new HR();
                        global++;
                        count= 0;
                    break;
                    default: 
                        Console.Write("def");
                    break;
                }
            }
        }
        allIndustries.Sort();
        System.IO.StreamWriter metaFile = new System.IO.StreamWriter(@"metadata/allIndustries.out");
        allIndustries.ForEach(o => metaFile.WriteLine(o));
        metaFile.Close();
        
        allCountries.Sort();
        System.IO.StreamWriter metaFile2 = new System.IO.StreamWriter(@"metadata/allCountries.out");
        allCountries.ForEach(o => metaFile2.WriteLine(o));
        metaFile2.Close();

        allRoles.Sort();
        System.IO.StreamWriter metaFile3 = new System.IO.StreamWriter(@"metadata/allRoles.out");
        allRoles.ForEach(o => metaFile3.WriteLine(o));
        metaFile3.Close();
       

        IEnumerable<HR> hrTargetedRoles = null;
        IEnumerable<HR> bestHRByIndustry = null;
        IEnumerable<HR> a = null;
      
        bestHRByIndustry = humanResources.Where(o => o.industry.Contains(industryPriority[0]) ||
                                        o.industry.Contains(industryPriority[1]) ||
                                        o.industry.Contains(industryPriority[2]) ||
                                        o.industry.Contains(industryPriority[3]) ||
                                        o.industry.Contains(industryPriority[4]) ||
                                        o.industry.Contains(industryPriority[5]) ||
                                        o.industry.Contains(industryPriority[6]) ||
                                        o.industry.Contains(industryPriority[7]) ||
                                        o.industry.Contains(industryPriority[8]) ||
                                        o.industry.Contains(industryPriority[9]) ||
                                        o.industry.Contains(industryPriority[10]) ||
                                        o.industry.Contains(industryPriority[11]) ||
                                        o.industry.Contains(industryPriority[12]));

         hrTargetedRoles =  bestHRByIndustry.Where(o => o.role.Contains(rolePriority[0]) || 
                                                    o.role.Contains(rolePriority[1]) ||
                                                    o.role.Contains(rolePriority[2]) ||
                                                    o.role.Contains(rolePriority[3]))
                                                    .OrderByDescending(o => o.role);
            
        a = hrTargetedRoles.Where(o => o.country.Equals(countryPriority[0]) ||
                                       o.country.Equals(countryPriority[1]))
                            .OrderByDescending(o => o.connections);
        //Convert.ToInt32(o.recomendations) > recommendationsMin);

        System.IO.StreamWriter file = new System.IO.StreamWriter(@"people.out");
        int p = 0;
        foreach(HR hr in a)
        {
            p++;
            string data = hr.id;//+"|"+hr.country+"|"+hr.role+"|"+hr.industry+"|"+hr.recomendations+"|"+hr.connections;
            file.WriteLine(data);
        }
        file.Close();
        Console.WriteLine(p);
        //System.Console.WriteLine("Press any key to exit.");
       // System.Console.ReadKey();
    }
}

public class HR
{
    public string id { get; set; }
    public string name { get; set; }
    public string lname { get; set; }
    public string role { get; set; }
    public string country { get; set; }
    public string industry { get; set; }
    public string recomendations {get; set; }
    public string connections {get; set; }

    public HR (){}
}
