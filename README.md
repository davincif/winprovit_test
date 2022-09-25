# Project for WinProvit
**Author**: Leonardo da Vinci (davincif)

[linkedin](https://www.linkedin.com/in/davincif/)

email: davincif@davincif.com


## How to use
Run some simple static file server on the current directory.

For that you can use commands like:
``` she
python3 -m http.server
```
or
``` shell
http-server
```
and go to the page *src/*

You can also use a extention like [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VsCode, for exemple.

The interface webpage should be ungly but self explanatory:
1. **click search** to saerch the posts and users.
2. **click on any user** to see it's posts. As the little text on top of the table implies. Click the same user again to close the posts.
3. **click clear** to clean all the data.

## Architecture
The intention was to mimic, in simple therms, and using only Javascript, that is, without the use of typings or interfaces, an **Hexagonal**, or yet **Ports and Adaptros**, architecture.

Throw the *Ports* that data gets in the system, and throw *Adaptros* it goes out. Note that this relation to the data flux, not to the call stack direction.

The models are use to represent the data being treated in the system. the *in Objects* are used by the ports to translate the data getting in the services, and the *Out Objects* serves the opposite propose.

Yet the *Transfer Objects* are used to define objetcs used to transfer data accross the layers of the software.

Note: all that being sayed, considering the architecture used, the existense of the object "Letter" is an antipatter, but I made the choise to crate it in order to attend what was asked by the requirements in the document of the challange.

## Modularization
I choose to adopt a classic MVC modularization. where the *view* is represented by the *{file}.html*; the *controler* is the *{file}.js*; and the *Model* by the very same models of the Hexagonal architecture.


## Code Documentation
In addition to this breaf explanation, in fact I consider this explanation to come in addition with what I'm about to inform: the code if full of usefull coments, in such a way that, in possesion of a good IDE (such as [VsCode](https://code.visualstudio.com/)) by hovering the methods and functions of the system you're gonna be presented with a fear bit of information about it.

Unfortunantely, it's was not possible better to closely tight the arguments and it's types together in the documentation and intelisence due to the language of choice.

## Testing
The environment is set up with jest and babel. But I didn't made any real teste with it.
Yes, I know it was required.


#### Best Wishes
Hope you all enjoy. Best wishes

-- Da Vinci.
