"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Music } from "lucide-react"

interface DiscordData {
  discord_status: "online" | "dnd" | "idle" | "offline"
  discord_user: {
    username: string
    discriminator: string
    avatar: string
    id: string
    global_name: string
  }
  spotify?: {
    song: string
    artist: string
    album_art_url: string
    timestamps: {
      start: number
      end: number
    }
  }
  activities?: Array<{
    name: string
    state?: string
    details?: string
    type: number
  }>
}

interface LanyardResponse {
  success: boolean
  data: DiscordData
}

export default function DiscordStatus() {
  const [data, setData] = useState<DiscordData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch("https://api.lanyard.rest/v1/users/1131577267248705696")

        if (!response.ok) {
          throw new Error("Failed to fetch Discord status")
        }

        const result: LanyardResponse = await response.json()

        if (result.success) {
          setData(result.data)
        } else {
          throw new Error("API returned unsuccessful response")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchDiscordStatus()

    // Refresh every 60 seconds
    const interval = setInterval(fetchDiscordStatus, 60000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Card className="w-full">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-muted animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
              <div className="h-3 w-32 bg-muted animate-pulse rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !data) {
    return (
      <Card className="w-full">
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground">Discord status unavailable</div>
        </CardContent>
      </Card>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "idle":
        return "bg-yellow-500"
      case "dnd":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const avatarUrl = data.discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/0.png`

  const displayName = data.discord_user.global_name || data.discord_user.username

  // Get current activity
  const currentActivity = data.activities?.find((activity) => activity.type === 0 || activity.type === 2)

  // Check if user is listening to Spotify
  const isListeningToSpotify = !!data.spotify

  return (
    <Card className="w-full overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={avatarUrl || "/placeholder.svg"}
                alt={displayName}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(
                data.discord_status,
              )}`}
            ></div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <p className="text-sm font-medium truncate">{displayName}</p>
              <span className="ml-1 text-xs text-muted-foreground">#{data.discord_user.discriminator}</span>
            </div>

            {isListeningToSpotify && (
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Music className="h-3 w-3 mr-1 text-green-400" />
                <span className="truncate">
                  {data.spotify?.song} by {data.spotify?.artist}
                </span>
              </div>
            )}

            {!isListeningToSpotify && currentActivity && (
              <div className="text-xs text-muted-foreground mt-1 truncate">
                {currentActivity.name}
                {currentActivity.details && `: ${currentActivity.details}`}
              </div>
            )}

            {!isListeningToSpotify && !currentActivity && (
              <div className="text-xs text-muted-foreground mt-1">
                {data.discord_status === "online"
                  ? "Online"
                  : data.discord_status === "idle"
                    ? "Idle"
                    : data.discord_status === "dnd"
                      ? "Do Not Disturb"
                      : "Offline"}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

