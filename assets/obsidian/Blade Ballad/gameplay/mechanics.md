Blade Ballad is procedural kinematics driven melee video game made in [Unity](https://unity.com/).
- Unity LTS 2022.3
- Built in Render Pipeline

# [[Combat]]


> [!NOTE] This is still under development
# Building
Buildings that the player creates are segmented by basic shapes, rather than as prefabs.
- You will work with only 2 fundamental shapes: The [[#Base]] and the [[#Wall]]. This streamlined system reduces the complexity and bulk typically involved in construction by limiting the number of shapes and prefabricated components available, while also giving considerable freedom to build, particularly the capacity to construct at angles—a notable advantage over voxel-based methods.
[Video demonstrating the system]( https://youtu.be/hXng_tf9A3U?si=h7ZQnaVQAeG2PHwR)
## Base 
This block is triangular in shape. In its standard, upright position, it can be used to construct either straight or angled walls. Angled walls are formed by attaching additional panels along the hypotenuse of the triangular base. When the base block is tilted, it functions as a sloped surface.
## Wall
This is a square panel that can be mounted on the edges of the base block. It can be positioned vertically to create upright walls, or it can be tilted to function as ramps.

# NPCs
I wanted to emulate the NPC behavior seen in Bethesda games like Fallout: New Vegas and Skyrim, where NPCs display both reactive and routine passive behaviors:
## Schedule
NPCs, regardless of importance, will follow a general schedule, which in its simplest form is to go to a predefined number of locations at a given time, triggered by a global time interval action. For example, an NPC might spend part of the day at a guard post, then move to an inn in the evening, with this pattern repeating daily. This kind of behavior works well with a Behavior Tree solution.