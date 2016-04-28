function TGame(){
	return (function(){
		
		// private declarations
		var started	= false;
		var events 	= {};

		// public declarations
		this.GetVersion = function () { return {Major: 0, Minor: 3}; };
		this.GetName 	= function () { return 'Mobsters'; };
		this.Frame		= 0;
		
		this.Screen = $('#gamescreen');
		
		// private functions		
		function Update(){
			if (!started) return false;
			 
			this.Frame ++; 
			console.log(this.Frame);
			
			window.setTimeout(Update, 1000);
			return true;
		};	
		
		// public functions	
		this.AddEventListener = function(trigger_name, ontrigger){
			if (!events[trigger_name]){
				events[trigger_name] = {last_id: 0, list: new Array()};
			}
	
			var current = events[trigger_name]; 
			
			current.last_id ++;
			
			current.list.push({call: ontrigger, id: current.last_id});
			return {name: trigger_name, id: current.last_id};
		};
		
		this.CallEvent = function(trigger_name, data){
			var current = events[trigger_name];
			 
			if (current){
				for (var i = 0; i < current.list.length; i++)
					current.list[i].call(data);
				return true;
			}
			
			return false;
		};
		
		this.RemoveEventListener = function(trigger_data){
			var current = events[trigger_data.name];
			 
			if (current)
				for (var i = 0; i < current.list.length; i++)
					if (current.list[i].id == trigger_data.id){
						current.list.splice(i, 1);
						return true;	
					}
					
			return false;
		};
		
		this.Start = function(){
			if (!started)  started = true; else return false;
			Update();
			
			return true;
		};
	
	return this;
	
	})();	
}
