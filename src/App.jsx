import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/card.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tabs.jsx";
import { Progress } from "./components/progress.jsx";
import { Input } from "./components/input.jsx";
import { Search } from "lucide-react";

const formatCurrency = (amount) =>
  `$${(amount / 1_000_000).toFixed(2)}M`;

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/data/teams.json")
      .then((res) => res.json())
      .then(setTeams)
      .catch(console.error);

    fetch("/data/players.json")
      .then((res) => res.json())
      .then(setPlayers)
      .catch(console.error);
  }, []);

  const filteredTeams = teams
    .filter((team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const filteredPlayers = players
    .filter(
      (player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.team.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-4 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">NHL Salary Cap Tracker</h1>

      <div className="flex items-center gap-2">
        <Search className="w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search team or player..."
          className="w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs defaultValue="teams" className="w-full">
        <TabsList>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="players">Players</TabsTrigger>
        </TabsList>

        <TabsContent value="teams">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTeams.map((team, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{team.name}</h2>
                    <span className="text-sm text-muted-foreground">
                      {formatCurrency(team.capSpace)} Cap Space
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Progress value={(team.capHit / 83000000) * 100} />
                    <p className="text-xs text-muted-foreground">
                      Cap Hit: {formatCurrency(team.capHit)} / $83.0M
                    </p>
                    {team.ltirRelief > 0 && (
                      <p className="text-xs text-yellow-500">
                        LTIR Relief: {formatCurrency(team.ltirRelief)}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="players">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPlayers.map((player, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{player.name}</h3>
                  <p className="text-sm text-muted-foreground">{player.team}</p>
                  <p className="text-sm">Cap Hit: {formatCurrency(player.capHit)}</p>
                  <p className="text-sm text-muted-foreground">
                    Position: {player.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years Remaining: {player.contractYears}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
