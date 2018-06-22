Se considera un criterio de ponderación más bien genérico**, desde el punto de vista de un programador (e.i. I) y se deja la posibilidad de ampliar el programa con las siguientes mejoras:

1) Elección de los criterios de ordenamiento del más importante al de menor relevancia. 
Ej: 1)Country
    2)Role
    3)Industry
    4)Recomendations, etc.

2) Listado de todos los países/roles/etc. y elección de los más relevantes. 
   Ésta selección sobreescribiría la selección default que es la que se utiliza actualmente en el programa. Ej: 
	
 ConsUser$- Elija los Roles más relevantes: 
	1)President    2)Chief   3)Programmer Sr.  4)etc..
	
	
IN:  1 - 3 - 2   |  SourceCode: rolePriority = {"President", "Programmer Sr.", "Chief"};



3)Repetir 2) con los criterios elejidos en 1)


Conclusión: Ésta mejora dará versatilidad al programa pudiendo elegir en cada ocasión los mejores candidatos, dependiendo de las características del cliente que se consideren más relevantes para una oportunidad de negocio en particular.


**Para esta ocasión en particular tomé en cuenta detalles de negocio a grandes rasgos, como la elección de apuntar a potenciales clientes exclusivamente de la industria de tecnología, de países desarrollados como United States y Canadá, y en un rol de importancia, tales como President, Chief, Director  | SC: countryPriority = {"United States", "Canada"};
				        industryPriority = {"Technology", "Software", "Information"};
					rolePriority = {"President", "Chief", "Programmer Sr."};
					recommendationsMin = 123;
					conectionsMin = 123;
