![[what-sword-stance-is-this-is-it-plausible-what-are-the-pros-v0-r1nj3z5anh4b1.webp]]

Blade Ballad is a *procedural kinematics driven* melee game.

> [!WARNING] This combat mechanic is copyrighted in order to protect against intellectual property theft and prevent others from exploiting it for their own profit.

## Comparing inverse kinematics to other procedural systems
Upcoming titles like Kinstrife or Half Sword uses a physics driven approach for their combat system, and I see several downsides to this. First, computing physics is resource intensive on the CPU. When a physics object moves, it needs to calculate collisions, velocity, angular velocity, drag, mass etc per tick, then you have to apply all those physics calculations on every single bone of your character and suddenly it’s taking up 80% of your processing power just to _move_. This computational demand makes it prohibitively expensive to scale NPC count, and I saw this in action when playing Half Sword, where just a small scene of 4 NPCs kicked up my computer fan into double time. Another rather ironic issue is that it _lowers_ realism. You would think that something controlled by physics would be more realistic, yet in practice, makes movements appear sluggish and cartoonish. Controlling a physics driven character is like trying to control a drunk: Telling it to go to one direction will result in a delayed response where the character first needs to slow down its momentum, then whiplash into the other direction. Early Kinstrife devlogs had characters which wobbled and flailed around while fighting, which looked pretty realistic if those characters were completely plastered, but I don’t think that was the intention. Ultimately, physics driven characters are simply not responsive; you spend more time trying to fight against your own character than its opponents. It’s good for simulating movement in a wacky & uncontrolled manner, like Fall Guys or Gang Beasts, but not so much for realistic & precise melee combat.

On the other hand, a keyframed driven approach is boring and repetitive, even with all the special effects and particles in the world (Calling out every single MMO/RPG/MMORPG for this). No one is going to blown away by having the same animation or set of animations replay each time they attack, no matter how flashy. I’d say Dark Souls is an outlier, but their attack animations are not really the focus of the game, but rather the dodging and the timing.

So I chose inverse kinematics not just for its performance advantages over physics, but also because it allows for dynamic, real-time character animation without needing extensive pre-made animation sets, that provides accurate and precise input responses. Yet, there are still endless possibilities as to how you can swing your blade, and there are only so many movements that you can simulate with just a mouse and keyboard until you have to rely on simulated controls which takes away your actual control (like the aforementioned physics driven games where the physics can work against you).
# procedural blade control
Combat revolves around swordplay, but works a little differently. You have much more control over the **angle** and **position** of your blade, which allows you to rotate it 360 degrees at any angle in response to a mouse delta vector. This is different than your typical sword fighting games where there is no consideration to attack delta angle, or the attack angle is very limited to 4 or 5 cardinal directions.
This makes the sword combat in Blade Ballad more *skill based* than *stat based*. While faster, sharper and bigger swords no doubt gives an advantage, it is more so your ability to precisely angle and position your blade to block an attack and then adjust its angle and position to target an exposed area of the enemy.
Attacks when connected, does *continuous* damage. Meaning, if you are able to completely slice through an enemy, each frame that the blade has struck will cause damage, rather than once at the first collision.
[Melee combat v1](https://youtu.be/M9GmEt43Fgs?si=vP9QwB5V-gTHW2kT)
[Melee combat v2](https://youtu.be/fg1aqhi02a8?si=9YAe-OM3YQ9IUuxY)

To imagine how melee combat controls work, envision a circle in front of your screen, to which your blade rotates within.
Now imagine that your screen is also a flat grid that has an x and y axis, which you can then pan your weapon anywhere on this grid.
These 2 positional and rotational controls are fundamental skills to master if you want to become an effective fighter.
# Target Soft Lock
NPC targets can be locked on by holding down the right mouse over it along with the free look key. This is comparable to what ADS (aim down sight) is in first person shooters, a mechanic that is secondary yet fundamental to master to the core gameplay mechanic.

# Angle based armor deflection
Armor pieces uses a realistic angle degree range calculated from the hit point to the armor piece's dot product center. In less technical terms, If a strike was hit at an angle within this armor piece protection range, then it will absorb or deflect it. This is a more realistic approach to how armor usually works in video games, where the armor usually absorbs the same amount of damage regardless of where the damage has been dealt.

# Dynamic damage
The damage output of your weapon is dynamically calculated based by how far you "pull back" or "wind up" your weapon, or how much you move it from the center. When the sword is swung from its current position, it executes a short swing. However, when the sword is panned all the way to the left, the tip of the blade begins to turn inward, and a swing from this position results in a much faster and more damaging strike. This approach allows for achieving somewhat realistic guard positions, such as the Vom Tag or Jodan no Kamae stances by pulling the sword all the way up, and the Pflug stance by moving it to the bottom.

# Flipped Swings
With your blade brandished, your crosshair will change to a chevron, which will display the current rotation of your blade, and what direction it will swing in.
Another essential mechanic involves what can be termed as "flipped swings." If you move the blade all the way to the right instead of the left but with the tip pointed to the left, the chevron will flip. This indicates that the swing you execute from this position will be flipped.

# Weapon Pitch
Weapon pitch is what controls the "twist" of your blade, and is set by the vertical pan position of said blade and your look angle.

# NPC combat movements
Once in combat, the NPC takes into consideration the length of their blade and that of their opponent, and randomly strafe around them while keeping a distance.