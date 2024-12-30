package com.example.shareapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val tabLayout = findViewById<TabLayout>(R.id.tabLayout)
        val viewPager = findViewById<ViewPager2>(R.id.viewPager)

        val adapter = ViewPagerAdapter(this)
        viewPager.adapter = adapter

        TabLayoutMediator(tabLayout, viewPager) { tab, position ->
            tab.text = when (position) {
                0 -> "Videos"
                1 -> "Books"
                2 -> "Blogs"
                else -> null
            }
        }.attach()
    }
}

class ViewPagerAdapter(fragmentActivity: FragmentActivity) : FragmentStateAdapter(fragmentActivity) {
    override fun getItemCount(): Int = 3

    override fun createFragment(position: Int): Fragment = when (position) {
        0 -> VideosFragment()
        1 -> BooksFragment()
        2 -> BlogsFragment()
        else -> throw IllegalStateException("Invalid position")
    }
}

class VideosFragment : Fragment(R.layout.fragment_videos) {
    // Implement video list here
}

class BooksFragment : Fragment(R.layout.fragment_books) {
    // Implement books list here
}

class BlogsFragment : Fragment(R.layout.fragment_blogs) {
    // Implement blogs list here
}
