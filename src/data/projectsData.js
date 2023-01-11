export const contributions = {
    Colorphase: [
        {
            title: 'Full Project Commit History',
            link: 'https://github.com/GDCASU/Color-Phase/commits?author=cdgonz115',
            description: 'The Full commit History to showcase in detail all of my contributions to this project',
            media: undefined
        },
        {
            title: 'Grapple Swing Mechanic',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/Player/Grapple.cs#L218',
            description: 'Original mechanic did not allow for much room to swing and build momentum as well '+
            'as a handful of other bugs, the improved version usessome extra logic and math that allow for a'+
            ' more realistic swinging mechanic.',
            media: 'media/Colorphase/grapple.gif'
        },
        {
            title: 'Double Jump Mechanic',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/Player/PlayerMovement.cs#L221',
            description: 'Script that allows the player to perform a double jump when the player is the color blue.',
            media: 'media/Colorphase/doublejump.gif'
        },
        {
            title: 'Wall Stick Mechanic',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/Player/PlayerMovement.cs#L392',
            description: 'When the player is the color red and there is a sicky wall they can jump and hold'+
            ' themselves in place to reach new areas.',
            media: 'media/Colorphase/wallstick.gif'
        },
        {
            title: "Vent's Mechanic",
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/Interactable/Vents.cs',
            description: 'If the player stands in front of a vent then they will be pushed in the direction'+
            ' the vent is facing, the force is strong enough to nullify gravity.',
            media: 'media/Colorphase/vents.gif'
        },
        {
            title: 'General Game UI',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/UI/UI.cs',
            description: 'Basic Functionality of the pause and title UI as well as having the player icon react'+
            ' to the player using the current color ability.',
            media: 'media/Colorphase/UIColorphase.gif'
        },
        {
            title: 'Remmapping Mechanic',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/UI/KeyboardRemap.cs',
            description: "The player is able to remap both on keyboard and controller what buttons/keys are in charge of hue's abilities",
            media: 'media/Colorphase/remapping.gif'
        },
        {
            title: 'Modular Level Selection',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/UI/PauseMenu.cs#L109',
            description: 'The number of levels in the game was not finalized by the time the UI was started. ' +
            'As a result the Level Select page needed to be modular and automatically creates the number of'+
            ' subpages necessary based on the number of scenes in the build.',
            media: 'media/Colorphase/levelselect.gif'
        },
        {
            title: 'Player Grapple Flying Fix',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/Player/Grapple.cs#L299',
            description: 'Grapple had no stopping point when pulling an object resulting in the object clipping'+
            ' with the player and resetting the jumping mechanic indefinitely.',
            media: 'media/Colorphase/buggedMechanic.gif'
        },
        {
            title: 'Controller Input Manager ',
            link: 'https://github.com/GDCASU/Color-Phase/blob/819c02a7998f371fcacca83bfcefdef38245bb4a/Assets/Scripts/Input/InputManager.cs#L54',
            description: 'Added the functionality for the Updated Custom Input Manager to be able to support'+
            ' controller input and all of its required functionalities.',
            media: undefined
        }
    ],
    TheBadMan: [
        {
            title: 'Full Project Commit History',
            link: 'https://github.com/cdgonz115/CPI_211_Final/commits?author=cdgonz115',
            description: 'The Full commit History to showcase in detail all of my contributions to this projec',
            media: undefined
        },
        {
            title: 'Camera Cutscenes',
            link: 'https://github.com/cdgonz115/CPI_211_Final/blob/master/Assets/_Scripts/Museum/EndingCinematic.cs',
            description: 'During important parts of the game, cutscenes can play to help guide the player.',
            media: 'media/TheBadMan/cutscenes.gif'
        },
        {
            title: 'AI line of sight spawn',
            link: 'https://github.com/cdgonz115/CPI_211_Final/blob/d2ea66fd1ff800c79c4b3184e1a2dba631da1fb0/Assets/_Scripts/AIScripts/moveTo.cs#L135',
            description: "Improved the AI script so that The Bad Man can spawn in front of the player if it's" +
            " out of line of sight and perform a jumpscare.",
            media: 'media/TheBadMan/lineofsight.gif'
        },
        {
            title: 'AI catch up mechanic',
            link: 'https://github.com/cdgonz115/CPI_211_Final/blob/d2ea66fd1ff800c79c4b3184e1a2dba631da1fb0/Assets/_Scripts/AIScripts/moveTo.cs#L126',
            description: 'Improved the AI script and made The Bad Man teleport closer to the player if they are'+
            ' not in sight to be more of a threat on the bigger maps.',
            media: 'media/TheBadMan/catchupmechanic.gif'
        },
        {
            title: 'Level Guiding Light',
            link: 'https://github.com/cdgonz115/CPI_211_Final/blob/master/Assets/_Scripts/VikingLight/StatueLight.cs',
            description: 'Added a light to always be present between the player and the closest point of interest'+
            ' in order to guide them, the intensity of it is relative to the distance of the player from that object.',
            media: 'media/TheBadMan/lightguidemechanic.gif'
        },
        {
            title: 'Hiding Improvement',
            link: 'https://github.com/cdgonz115/CPI_211_Final/blob/d2ea66fd1ff800c79c4b3184e1a2dba631da1fb0/Assets/_Scripts/Interactables/HideInteractable.cs#L39',
            description: 'Whether the player hides successfully is dependent on line of sight, this allowed for'+
            ' the bad man to catch the player while hiding but this was not well communicated to the player, as'+
            ' a result a prompt was added to let the player know.',
            media: 'media/TheBadMan/hidingmechanic.gif'
        },
        {
            title: 'Stun Improvement',
            link: 'https://github.com/cdgonz115/CPI_211_Final/blob/d2ea66fd1ff800c79c4b3184e1a2dba631da1fb0/Assets/_Scripts/AIScripts/AISight.cs#L130',
            description: 'The Stun mechanic was improved to allow the player to hide nearby after blinding The Bad Man.',
            media: 'TheBadMan/stunmechanic.gif'
        },
        {
            title: 'Glowing Eyes (small epilepsy warning)',
            link: 'https://github.com/cdgonz115/CPI_211_Final/blob/d2ea66fd1ff800c79c4b3184e1a2dba631da1fb0/Assets/_Scripts/AIScripts/moveTo.cs#L225',
            description: 'Due to the dark nature of the maps, it was sometimes hard to tell where The Bad Man was and'+
            ' whether he was chasing. As a result glowing red eyes were added as a way to help the player know where The Bad Man is.',
            media: 'TheBadMan/eyeglow.gif'
        },
        {
            title: 'Level Environment Scripts',
            link: 'https://github.com/cdgonz115/CPI_211_Final/tree/master/Assets/_Scripts/Future',
            description: 'Made scripts specific to level information/interactions such as the flickering lights in some levels and melting ice.',
            media: 'TheBadMan/leveldetails.gif'
        }
    ],
    AegisInitiative: [
        {
            title: 'Systems Officer',
            link: 'https://github.com/GDCASU/Firefox/commits?author=cdgonz115',
            description: 'Manage the GitHub repository and decide when changes are good in order to be merged' +
            ' into the main branch as well as do small updates to systems, organizing the project, and fix issues.',
            media: undefined
        },
        {
            title: 'Copilots System',
            link: 'https://github.com/GDCASU/Firefox/commit/de0bf88c9be95ccf13f3d93724636749cddaa96',
            description: 'Created the base for copilots system to facilitate and standardize the method of making' +
            ' copilots and adding their unique abilities to the player.',
            media: 'media/AegisInitiative/copilots.gif'
        },
        {
            title: 'UI functionality',
            link: 'https://github.com/GDCASU/Firefox/tree/master/Assets/Scripts/UI',
            description: 'Created the scripts to handle all of the UI functionality in the game. This included'+
            ' things such as settings, loading scenes, and Copilot selection.',
            media: 'media/AegisInitiative/UI.gif'
        },
        {
            title: 'Asteroids',
            link: 'https://github.com/GDCASU/Firefox/commit/144a7e71f1a55f6e10fdddefff7ee58807b28958',
            description: 'Script that spawned asteroids within an area and kept them there as debri for the player'+
            ' to try and evade.',
            media: 'media/AegisInitiative/asteroids.gif'
        }  
    ],
    ChronOdin: [
        {
            title: 'Project Lead',
            link: undefined,
            description: "Created the projects timeline with the projects producer as well as coordinated with the team"+
            " leads to develop the project's features.",
            media: undefined
        },
        {
            title: 'Github Manager',
            link: 'https://github.com/GDCASU/TimePuzzle/commits?author=cdgonz115',
            description:'Help manage the GitHub repository doing reviews, and merges alongside the other repository managers.' ,
            media: undefined
        },
        {
            title: 'Moving Platforms',
            link: 'https://github.com/GDCASU/TimePuzzle/blob/main/Assets/Editor/MovingPlatformPathEditor.cs',
            description:'Created an asset that would move a platform along an array of vectors as well as the tools to help'+
            ' the designers visualize and customize the path the platform will take.' ,
            media: 'media/ChronOdin/platform.gif'
        },
        {
            title: 'UI Implementation',
            link: 'https://github.com/GDCASU/TimePuzzle/tree/main/Assets/Scripts/UI',
            description:'Created a functional UI that allowed to player to traverse through the game and adjust settings to their liking.' ,
            media: 'media/ChronOdin/functionalUI.gif'
        },
        {
            title: 'Master Time Class',
            link: 'https://github.com/GDCASU/TimePuzzle/blob/main/Assets/Scripts/TimeManipulation/MasterTime.cs',
            description:"Created our own time script to allow the effect of manipulating time without having to change the"+ 
            " built in Unity Time class which can affect the engine's physics." ,
            media: 'media/ChronOdin/master_time.gif'
        },
        {
            title: 'Flowing River',
            link: 'https://github.com/GDCASU/TimePuzzle/blob/main/Assets/Scripts/LevelFunctionality/Flowing_River.cs',
            description:'Created an asset that pushed the player on a desired direction and limited their movement.',
            media: 'media/ChronOdin/flowingRiver.gif'
        },
    ],
    ProjectHoldW: [
        {
            title: 'Physics Based Movement System',
            link: 'https://github.com/cdgonz115/TestMechanics/tree/main/Assets/Scripts/Player/PlayerController',
            description: 'Created a physics based movement system that allow the player to perform basic actions like moving, crouching,'+
            ' and jumping, but also more advanced features such as vaulting, climbing, and sliding. All of them can be toggled on and'+
            ' off and the code is modular so adding new movement features is easy.',
            media: 'media/HoldW/playercontroller.gif'
        },
        {
            title: 'Launch Grapple ',
            link: 'https://github.com/cdgonz115/TestMechanics/blob/main/Assets/Scripts/Player/PlayerController/PlayerControllerLaunch.cs',
            description: 'Script that launches the player to the location where the indicator is. Inspired by the Dishonored 2 far reach mechanic.',
            media: 'media/HoldW/launch.gif'
        },
        {
            title: 'Projectile Platform',
            link: 'https://github.com/cdgonz115/TestMechanics/tree/main/Assets/Scripts/Abilitites/ProjectilePlatform',
            description: "Projectile that is shot out and spawns a platform when it collides. The platforms's orientation is based on the"+
            " direction that it collided with the surface to make it easier on the player to keep their momentum as well as reset the player's abilities .",
            media: 'media/HoldW/platform.gif'
        }
    ],
    TheStation: [
        {
            title: 'Full Project Commit History',
            link: 'https://github.com/cdgonz115/CPI211_Team10/commits?author=cdgonz115',
            description: 'The Full commit History to showcase in detail all of my contributions to this project',
            media: 'media/HoldW/playercontroller.gif'
        },
        {
            title: 'Shooting Mechanic',
            link: 'https://github.com/cdgonz115/CPI211_Team10/blob/ccd06c92657c0eb42a8ceb6ff3f8e3cdbc4e37f2/Assets/Scripts/Payer/Looking.cs#L43',
            description: 'Script that ensured that the bullet would travel at the correct location even if the bullet spawned to the'+
            ' side at the front the barrel of the gun and not the center of the screen where the raycast was casted.',
            media: 'media/TheStation/shootingmechanic.gif'
        },
        {
            title: 'Ending Cutscenes',
            link: 'https://github.com/cdgonz115/CPI211_Team10/blob/ccd06c92657c0eb42a8ceb6ff3f8e3cdbc4e37f2/Assets/Scripts/Level2/FlyAway.cs',
            description: 'Scripts to control the camera and the ship for the end cutscenes. ',
            media: 'media/TheStation/endcinematics.gif'
        },
        {
            title: 'Basic Game Mechanics',
            link: 'https://github.com/cdgonz115/CPI211_Team10/tree/ccd06c92657c0eb42a8ceb6ff3f8e3cdbc4e37f2/Assets/Scripts/Level2',
            description: 'Multiple basic functionality for the game loop such as the change in gravity, the hovering key, ending the game,'+
            ' and the teleporter unlocking after the key was picked up.',
            media: 'media/TheStation/basicgamemechanics.gif'
        },
    ],
    HyperLoop: [
        {
            title: 'Full Project Commit History',
            link: 'https://github.com/cdgonz115/LudumDare47_Speed3.0/commits?author=cdgonz115',
            description: 'The Full commit History to showcase in detail all of my contributions to this project',
            media: undefined
        },
        {
            title: 'Player Movement',
            link: 'https://github.com/cdgonz115/LudumDare47_Speed3.0/blob/main/Assets/Scripts/Player/TestMovement.cs',
            description: "Created a movement system that allows the player to build up speed as long as they hold"+
            " down one of the move keys or they don't crash with a wall.",
            media: 'media/Hyperloop/movement.gif'
        },
        {
            title: 'Teleporter',
            link: 'https://github.com/cdgonz115/LudumDare47_Speed3.0/blob/main/Assets/Scripts/Enviroment/Teleporter.cs',
            description: 'Created a teleporter that matches the players X and Y position to allow them to build speed'+ 
            ' and position themselves to reach new areas.',
            media: 'media/Hyperloop/teleporter.gif'
        },
        {
            title: 'Break Wall',
            link: 'https://github.com/cdgonz115/LudumDare47_Speed3.0/blob/main/Assets/Scripts/Enviroment/BreakAtSpeed.cs',
            description: 'Created a script that destroys the walls if the player is moving over the required velocity to break them.',
            media: 'media/Hyperloop/breakwall.gif'
        },
        {
            title: 'Speed Boost Fixes',
            link: 'https://github.com/cdgonz115/LudumDare47_Speed3.0/commit/72540cd59210d7a087a5e8cc0ced802a94fd0858',
            description: 'Update the SpeedBoost mechanic to work with the new version of the player movement script that no longer used a rigidbody.',
            media: undefined
        }
    ],
    Cybob: [
        {
            title: 'Full Project Commit History',
            link: 'https://github.com/cdgonz115/Cybob/commits?author=cdgonz115',
            description: 'The Full commit History to showcase in detail all of my contributions to this project',
            media: undefined
        },
        {
            title: 'Player Movement',
            link: 'https://github.com/cdgonz115/Cybob/blob/master/Assets/Scripts/Player/Movement.cs',
            description: 'Created the player movement that works for both 2d and 3d parts of the game.',
            media: 'media/Cybob/movement.jpg'
        },
        {
            title: 'Stage One Functionality',
            link: 'https://github.com/cdgonz115/Cybob/tree/master/Assets/Scripts/Levels/Gravity',
            description: "Created all the necessary scripts for the 1s't level including the ransition"+
            " from 2d camera to 3d, the moving lights inside the tube, the rotation of the tube and the animation for reaching the goal.",
            media: 'media/Cybob/levelone.jpg'
        },
        {
            title: 'Unlock Abilities',
            link: 'https://github.com/cdgonz115/Cybob/tree/master/Assets/Scripts/Levels/Stealth',
            description: 'Script that allowed the player to unlock the crouch and jump abilities as they progressed through the game.',
            media: 'media/Cybob/pickupabilities.jpg'
        }
    ]
}
export const descriptions = {
    Colorphase: {
        title: 'Game Summary',
        projectSummary: 'Enjoy a colorful puzzle-platformer experience in Color Phase! Find and use different colors' +
        'to interact with the world around you in a variety of different ways to reach your goal!',
        link: 'https://store.steampowered.com/app/956540/Color_Phase/',
        media: 'media/Colorphase/colorphase.png'
    },
    TheBadMan:{
        title: 'Game Summary',
        projectSummary: 'Cower in fear as you explore a massive museum full of huge, life-like exhibits as you are'+
        ' stalked by the bad, hooded man. Get caught and you will surely die, unlock the door, escape, or say goodbye!',
        link: 'https://cg115.itch.io/the-bad-man',
        media: 'media/TheBadMan/badman.png'
    },
    AegisInitiative: {
        title: 'Game Summary(Early Access)',
        projectSummary: 'Aegis Initiative is an on rail flyer/shooter that takes players to various exotic planets and whose game play varies based on your copilots and their unique abilities.' +
         'Grow with your fellow pilots through unique dialogue in the visual novel sections',
        link: 'https://heatwave-studios.itch.io/aegis-initiative',
        media: 'media/AegisInitiative/aegis.PNG'
    },
    ChronOdin: {
        title: 'Game Summary',
        projectSummary:  'ChronOdin is a puzzle-platformer game that gives the player the power to manipulate time.' + 
        ' Take on the role as a fallen Nordic warrior as they travel to Valhalla and remember their past life. Control the'+
        ' flow of time to pass through the ruins, finding locked doors and shifting floors at every turn. Take on the role'+
        ' as a fallen Nordic warrior as they travel to Valhalla and remember their past life. Control the flow of time to pass'+
        ' through the ruins, finding locked doors and shifting floors at every turn',
        link: 'https://heatwave-studios.itch.io/chronodin',
        media: 'media/ChronOdin/chronOdin.png'
    },
    ProjectHoldW: {
        title: 'Game Summary(In Development)',
        projectSummary:  'Project Hold W was created as a project to learn and explore about fast paced movement games and what makes them fun.'+
        ' It was inspired by the movement mechanics in games such as Titanfall, Dishonored, and Destiny.',
        link: undefined,
        media: undefined
    },
    TheStation: {
        title: 'Game Summary',
        projectSummary:  'Kill the aliens to obtain the key and escape before its too late!',
        link: 'https://cg115.itch.io/the-station',
        media: 'media/TheStation/thestation.png'
    },
    HyperLoop: {
        title: 'Game Summary',
        projectSummary:  'Build up speed to escape the loop. Avoid the traps and keep an eye out for boosts! Destroy walls if you need a path. (LudumDare47 Submission)',
        link: 'https://cg115.itch.io/hyperloop',
        media: 'media/Hyperloop/hyperloop.png'
    },
    Cybob: {
        title: 'Game Summary',
        projectSummary:  'CyBob is an adventure story about a determined cyborg on a quest to repair his body and mind.'+
        ' Follow CyBob as he goes from wimpy automaton to powerful terminator.',
        link: 'https://phyrol.itch.io/cybob',
        media: 'media/Cybob/cybob.png'
    }
}
export const projects = [
 {key: 'Colorphase', title: 'Colorphase'},
 {key: 'TheBadMan', title: 'The Bad Man'}, 
 {key: 'AegisInitiative',title: 'Aegis Initiative'},
 {key: 'ChronOdin',title: 'ChronOdin'},
 {key: 'ProjectHoldW',title: 'Project Hold W'},
 {key: 'TheStation',title: 'The Station'},
 {key: 'HyperLoop',title: 'HyperLoop'},
 {key: 'Cybob',title: 'Cybob'}
]

