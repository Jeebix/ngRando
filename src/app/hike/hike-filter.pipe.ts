import { Pipe, PipeTransform } from '@angular/core';
// PipeTransform est une interface qui est souvent utilisée avec Pipe
import { Hike } from './hike';

// Décorateur est une fonction qui se configure avec un objet
@Pipe({
	name: 'hikeFilter'
})

export class HikeFilterPipe implements PipeTransform {

	transform(value: Hike[], searchTerm: string = '') {
		if ( searchTerm !== '' )
		{
			let result = value.filter((hike: Hike) => hike.description.toLowerCase().includes(searchTerm.toLowerCase()) || hike.name.toLowerCase().includes(searchTerm.toLowerCase()));
			// On obtiens un tableau qui contient uniquement les descriptions + titres qui contiennent "searchTerm"
			return result;
		}
		else
		{
			return value;
		}
	}
}