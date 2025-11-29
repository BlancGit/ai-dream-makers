import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Code } from "lucide-react";

const CSharpRPGSnippet = () => {
  const codeSnippet = `using System;
using System.Collections.Generic;

namespace TextRPG
{
    class Program
    {
        static void Main(string[] args)
        {
            // TODO: Create a new Game instance and call Start()
            // This is the entry point of your application
        }
    }

    class Game
    {
        // FIELDS: Store the game state
        private Player player;
        private bool isRunning;

        // TODO: Implement the Start() method
        // This should:
        // 1. Print a welcome message
        // 2. Ask for the player's name
        // 3. Create a new Player object with that name
        // 4. Set isRunning to true
        // 5. Call MainGameLoop()
        public void Start()
        {
            // YOUR CODE HERE
        }

        // MAIN GAME LOOP
        // This keeps the game running until player quits or dies
        private void MainGameLoop()
        {
            while (isRunning && player.IsAlive)
            {
                // TODO: Display menu options:
                // 1. Explore
                // 2. Check Status
                // 3. Rest
                // 4. Quit

                // TODO: Get user input

                // TODO: Use a switch statement to handle each choice
                // Call the appropriate method for each option
            }

            // TODO: If player died, display game over message
        }

        // EXPLORATION SYSTEM
        private void Explore()
        {
            // TODO: Use Random to generate an encounter (1-3)
            // 1 = Find Treasure
            // 2 = Encounter Enemy
            // 3 = Find Nothing

            // TODO: Use switch statement to call appropriate method
        }

        private void FindTreasure()
        {
            // TODO: Generate random gold amount (10-50)
            // TODO: Add gold to player
            // TODO: Print message telling player how much gold they found
        }

        private void FindNothing()
        {
            // TODO: Print a message saying nothing was found
        }

        private void EncounterEnemy()
        {
            // TODO: Create a new Enemy with random stats
            // Name: "Goblin"
            // Health: random 20-40
            // Attack: random 5-15

            // TODO: Print enemy encounter message
            // TODO: Call Combat() method with the enemy
        }

        // COMBAT SYSTEM
        private void Combat(Enemy enemy)
        {
            // TODO: Create a combat loop that runs while both enemy and player are alive

            // Inside the loop:
            // TODO: Display combat options (Attack, Defend, Run)
            // TODO: Get player choice
            // TODO: Handle each choice:
            //   - Attack: player attacks, then enemy attacks back (if alive)
            //   - Defend: enemy attacks but damage is reduced by half
            //   - Run: exit combat immediately

            // TODO: If enemy dies, give player gold and XP rewards
            // TODO: Display current HP for both after each round
        }

        private void Rest()
        {
            // TODO: Heal player for 30 HP
            // TODO: Print rest message
        }
    }

    // BASE CHARACTER CLASS
    // Both Player and Enemy will inherit from this
    class Character
    {
        // PROPERTIES: Define what all characters have
        public string Name { get; set; }
        public int Health { get; set; }
        public int MaxHealth { get; set; }
        public int AttackPower { get; set; }

        // COMPUTED PROPERTY: Returns true if health > 0
        public bool IsAlive => Health > 0;

        // ATTACK METHOD: Returns damage amount
        public virtual int Attack()
        {
            // TODO: Return AttackPower + random variation (-2 to +5)
            // Hint: Use Random class
            return 0; // Replace this
        }

        // DAMAGE METHOD: Reduces health
        public void TakeDamage(int damage)
        {
            // TODO: Subtract damage from Health
            // TODO: Make sure Health doesn't go below 0
        }

        // HEALING METHOD: Restores health
        public void Heal(int amount)
        {
            // TODO: Add amount to Health
            // TODO: Make sure Health doesn't exceed MaxHealth
        }
    }

    // PLAYER CLASS - Inherits from Character
    class Player : Character
    {
        // ADDITIONAL PROPERTIES specific to player
        public int Gold { get; set; }
        public int Experience { get; set; }
        public int Level { get; set; }

        // CONSTRUCTOR: Sets up starting stats
        public Player(string name)
        {
            // TODO: Set initial values:
            // Name = name parameter
            // MaxHealth = 100
            // Health = MaxHealth
            // AttackPower = 15
            // Gold = 0
            // Experience = 0
            // Level = 1
        }

        // STATUS DISPLAY: Shows player stats
        public void ShowStatus()
        {
            // TODO: Print all player stats in a nice format
            // Include: Name, Level, HP, Attack, Gold, XP
        }

        // EXPERIENCE SYSTEM
        public void GainExperience(int xp)
        {
            // TODO: Add xp to Experience
            // TODO: Check if Experience >= 100 * Level
            // If true, call LevelUp()
        }

        // LEVEL UP SYSTEM
        private void LevelUp()
        {
            // TODO: Increase Level by 1
            // TODO: Increase MaxHealth by 20
            // TODO: Set Health to MaxHealth (full heal on level up)
            // TODO: Increase AttackPower by 5
            // TODO: Print level up message with new stats
        }
    }

    // ENEMY CLASS - Inherits from Character
    class Enemy : Character
    {
        // CONSTRUCTOR: Creates enemy with specified stats
        public Enemy(string name, int health, int attack)
        {
            // TODO: Set Name, MaxHealth, Health, and AttackPower
            // from the parameters
        }
    }
}`;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
      {/* Header */}
      <div className="text-center py-12 md:py-20">
        <div className="flex items-center justify-center mb-6">
          <Code className="w-12 h-12 md:w-16 md:h-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
          C# RPG Game Code Snippet
        </h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 max-w-3xl mx-auto">
          A starter template for building your own text-based RPG game in C#!
        </p>
      </div>

      {/* Code Display Card */}
      <Card className="rounded-2xl shadow-lifted">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Complete Game Template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary p-6 rounded-xl overflow-x-auto">
            <pre className="text-sm font-mono text-secondary-foreground">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Instructions Section */}
      <section className="bg-accent py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 tracking-tight">
            How to Use This Code
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-card">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground font-black text-xl">1</span>
                </div>
                <CardTitle className="text-xl font-bold">Copy the Code</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Select all the code above and copy it to your clipboard. You can use Ctrl+A (or Cmd+A on Mac) to select all.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-card">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-background font-black text-xl">2</span>
                </div>
                <CardTitle className="text-xl font-bold">Create a New Project</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Open Visual Studio or your C# IDE, create a new Console Application project, and paste the code into Program.cs.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-card">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground font-black text-xl">3</span>
                </div>
                <CardTitle className="text-xl font-bold">Fill in the TODOs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Follow the TODO comments throughout the code to complete each method. Start with the Main() method!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-foreground py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 text-background tracking-tight">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">Object-Oriented Programming</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Classes and Objects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Inheritance (Player and Enemy from Character)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Properties and Methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Constructors</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">Game Programming Concepts</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Game loops and state management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Combat systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Random encounters and events</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Player progression (XP and leveling)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">C# Fundamentals</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Control structures (loops, conditionals)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Switch statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Random number generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>User input and console output</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="text-center py-12 md:py-20">
        <Card className="rounded-2xl shadow-lifted max-w-md mx-auto">
          <CardContent className="py-12">
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Ready to Explore More?</h3>
            <p className="text-muted-foreground font-medium mb-8">
              Head back to see more activities and coding resources!
            </p>
            <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold" asChild>
              <Link to="/games">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Activities
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CSharpRPGSnippet;
